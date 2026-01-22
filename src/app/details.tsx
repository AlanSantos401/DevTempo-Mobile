import DaulyForecast from "@/components/DailyForecast";
import HourlyForecast from "@/components/HourlyForecast";
import WeatherCard from "@/components/WeatherCard";
import { getDailyForecast, getHourlyForecast } from "@/hooks/forecast";
import { getWeatherBackground } from "@/hooks/getWeatherBackground";
import { getCurrentWeather, getForecast } from "@/services/weatherService";
import { colors } from "@/styles/colors";
import { detailsStyles } from "@/styles/details.styles";
import { WeatherData } from "@/types/weather";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from 'lucide-react-native';
import { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Details() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [hourlyForecast, setHourlyForecast] = useState<any[]>([]);
  const [dailyForecast, setDailyForecast] = useState<any[]>([]);


  const router = useRouter()

  const { cityName } = useLocalSearchParams<{ cityName: string }>()

  useEffect(() => {
    if (cityName) getWeatherData()
  }, [cityName])

  

 const getWeatherData = async () => {
  setLoading(true)
  setError(null)

  // 🌤️ Clima atual
  const result = await getCurrentWeather(cityName as string)

  if (!result.success) {
    setError(result.error)
    setLoading(false)
    return
  }

  setWeatherData(result.data)

  const { lat, lon } = result.data.coord

  // 📅 Forecast
  const forecastResult = await getForecast(lat, lon)

  // ✅ GUARDA DE TIPO (OBRIGATÓRIO)
  if (!forecastResult.success) {
    console.log("Erro forecast:", forecastResult.error)
    setLoading(false)
    return
  }

  // =================================
  // ⏰ PRÓXIMAS 6 HORAS
  // =================================
  const next6Hours = forecastResult.data.list.slice(0, 6)
  setHourlyForecast(next6Hours)

  // =================================
  // 📆 PRÓXIMOS 5 DIAS
  // =================================
  const dailyMap: Record<string, any[]> = {}

  forecastResult.data.list.forEach(item => {
    const date = item.dt_txt.split(" ")[0]

    if (!dailyMap[date]) {
      dailyMap[date] = []
    }

    dailyMap[date].push(item)
  })

  const dailyArray = Object.keys(dailyMap)
    .slice(1, 6)
    .map(date => {
      const dayItems = dailyMap[date]

      const tempsMin = dayItems.map(i => i.main.temp_min)
      const tempsMax = dayItems.map(i => i.main.temp_max)

      const min = Math.min(...tempsMin)
      const max = Math.max(...tempsMax)

      const noonItem =
        dayItems.find(i => i.dt_txt.includes("12:00:00")) || dayItems[0]

      const weekDay = new Date(date).toLocaleDateString("pt-BR", {
        weekday: "short",
      })

      const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      })

      return {
        day: weekDay.toUpperCase(),
        date: formattedDate,
        icon: noonItem.weather[0].icon,
        min: Math.round(min),
        max: Math.round(max),
      }
    })

  setDailyForecast(dailyArray)

  setLoading(false)
}

  const isNight =
    weatherData?.weather[0].icon.endsWith("n") ?? false


  return (


    <SafeAreaView style={detailsStyles.safeAre}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={detailsStyles.container}>
        {weatherData && (
          <ImageBackground
            source={getWeatherBackground(
              weatherData.weather[0].main,
              weatherData.weather[0].icon
            )}
            style={detailsStyles.background}
            resizeMode="cover"
          >

            <TouchableOpacity style={detailsStyles.backButton} onPress={() => router.back()}>
              <ArrowLeft size={21} color="#333333" />
            </TouchableOpacity>

            <View style={detailsStyles.hearder}>
              <Text style={[detailsStyles.title, { color: isNight ? colors.border : colors.text }]}>Clima Atual</Text>
            </View>

            {loading && (
              <View style={detailsStyles.loadingContainer}>
                <ActivityIndicator size="large" color="#4A90E2" />
                <Text style={detailsStyles.loadingText}>Carregando...</Text>
              </View>
            )}

            {!loading && error && (
              <View style={detailsStyles.erroContainer}>
                <Text style={detailsStyles.erroText}>{error}</Text>
                <TouchableOpacity onPress={getWeatherData} style={detailsStyles.retryButton}>
                  <Text style={detailsStyles.retryButtonText}>Tente Novamente</Text>
                </TouchableOpacity>
              </View>
            )}

            {!loading && !error && weatherData && (
              <WeatherCard weather={weatherData} />
            )}

            {!loading && !error && weatherData && (
              <HourlyForecast data={hourlyForecast}/>
            )}

            {!loading && !error && weatherData && (
              <DaulyForecast data={dailyForecast}/>
            )}
          </ImageBackground>
        )}

      </ScrollView>

    </SafeAreaView>
  )
}