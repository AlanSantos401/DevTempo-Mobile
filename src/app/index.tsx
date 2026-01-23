import SearchBar from "@/components/SearchBar";
import { Temperature } from "@/components/temperatureColor";
import { getWeatherBackground } from "@/hooks/getWeatherBackground";
import { useLocation } from "@/hooks/useLocation";
import { getCurrentWeatherCoods, getForecast, getWeatherIcon } from "@/services/weatherService";
import { detailsStyles } from "@/styles/details.styles";
import { homeStyles } from "@/styles/home.styles";
import { HourlyForescastStyles } from "@/styles/HourlyForecast.styles";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { getCurrentLocation, loading } = useLocation()
  const router = useRouter()

  const [currentWeather, setCurrentWeather] = useState<any>(null)
  const [hourlyForecast, setHourlyForecast] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadWeatherAutomatically()
  }, [])

  const loadWeatherAutomatically = async () => {
    setError(null)

    const locationResult = await getCurrentLocation()

    if (!locationResult.success) {
      setError(locationResult.error)
      return
    }

    const { latitude, longitude } = locationResult.coodinates

    // 🌤️ CLIMA ATUAL
    const weatherResult = await getCurrentWeatherCoods(latitude, longitude)
    if (weatherResult.success) {
      setCurrentWeather(weatherResult.data)
    }

    // ⏰ PRÓXIMAS HORAS
    const forecastResult = await getForecast(latitude, longitude)
    if (forecastResult.success) {
      setHourlyForecast(forecastResult.data.list.slice(0, 6))
    }
  }


  const handleSearch = (cityName: string) => {
    router.push({
      pathname: "/details",
      params: { cityName }
    })
  }

  const handleLocation = async () => {
    const locationResult = await getCurrentLocation()

    if (!locationResult.success) {
      Alert.alert('Erro', locationResult.error)
    } else {
      const { latitude, longitude } = locationResult.coodinates
      const weatherResult = await getCurrentWeatherCoods(latitude, longitude)

      if (!weatherResult.success) {
        Alert.alert('Erro', weatherResult.error)
      } else {
        router.push({
          pathname: "/details",
          params: { cityName: weatherResult.data.name }
        })
      }
    }
  }

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView style={homeStyles.container} contentContainerStyle={{ flexGrow: 1 }}>

        {currentWeather && (
          <ImageBackground
            source={getWeatherBackground(
              currentWeather.weather[0].main,
              currentWeather.weather[0].icon
            )}
            style={[detailsStyles.background, { flex: 1 }]}
            resizeMode="cover"
          >


            <View style={homeStyles.header}>
              <Text style={homeStyles.title}>Dev Tempo 🌤️</Text>
              <Text style={homeStyles.subtitle}>Busque o clima em qualquer lugar!</Text>
            </View>

            <SearchBar onSearch={handleSearch} />

            <TouchableOpacity onPress={handleLocation} style={homeStyles.gpsButton}>
              {loading ? <ActivityIndicator size={"large"} /> : <Text style={homeStyles.gpsText}>Usar Minha Localização</Text>}
            </TouchableOpacity>


            {currentWeather && (
              <View style={homeStyles.card}>
                <Text style={homeStyles.cityName}>{currentWeather.name}</Text>
                {currentWeather.weather[0] && <Image
                  style={homeStyles.weatherIcon}
                  source={{ uri: getWeatherIcon(currentWeather.weather[0].icon) }}
                />}

                <Text style={homeStyles.temperature}>
                  <Temperature value={currentWeather.main.temp} />
                </Text>

                {currentWeather.weather[0] && <Text style={homeStyles.description}>
                  {currentWeather.weather[0].description}
                </Text>
                }
                <View style={homeStyles.detailsContainer}>
                  <View style={homeStyles.detailsItems}>
                    <Text style={homeStyles.detailsLabel}>Sensação Térmica:</Text>
                    <Text style={homeStyles.detailsValue}>{Math.round(currentWeather.main.feels_like)} °C</Text>
                  </View>

                  <View style={homeStyles.detailsItems}>
                    <Text style={homeStyles.detailsLabel}>Umidade:</Text>
                    <Text style={homeStyles.detailsValue}>{currentWeather.main.humidity}%</Text>
                  </View>

                  <View style={homeStyles.detailsItems}>
                    <Text style={homeStyles.detailsLabel}>Vento:</Text>
                    <Text style={homeStyles.detailsValue}>{currentWeather.wind.speed} m/s</Text>
                  </View>
                </View>
              </View>
            )}

            {hourlyForecast.length > 0 && (
              <View style={HourlyForescastStyles.container}>

                {/* TÍTULO */}
                <View>
                  <Text style={HourlyForescastStyles.text}>
                    Próximas horas
                  </Text>
                </View>

                {/* LISTA */}
                <View style={HourlyForescastStyles.cardHourly}>
                  {hourlyForecast.map((item, index) => {
                    const hour = new Date(item.dt * 1000).getHours()

                    return (
                      <View
                        key={index}
                        style={HourlyForescastStyles.text}
                      >
                        {/* HORA */}
                        <Text>{hour}h</Text>

                        {/* ÍCONE */}
                        <Image
                          source={{ uri: getWeatherIcon(item.weather[0].icon) }}
                          style={HourlyForescastStyles.icon}
                        />

                        {/* TEMPERATURA */}
                        <Text>{Math.round(item.main.temp)}°</Text>
                      </View>
                    )
                  })}
                </View>
              </View>
            )}

          </ImageBackground>
        )}

      </ScrollView>
    </SafeAreaView>
  )
}