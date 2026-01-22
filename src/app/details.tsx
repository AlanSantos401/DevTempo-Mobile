import DaulyForecast from "@/components/DailyForecast";
import HourlyForecast from "@/components/HourlyForecast";
import WeatherCard from "@/components/WeatherCard";
import { getWeatherBackground } from "@/hooks/getWeatherBackground";
import { getCurrentWeather } from "@/services/weatherService";
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

  const router = useRouter()

  const { cityName } = useLocalSearchParams<{ cityName: string }>()

  useEffect(() => {
    if (cityName) getWeatherData()
  }, [cityName])

  const getWeatherData = async () => {
    setLoading(true)
    setError(null)

    const result = await getCurrentWeather(cityName as string)

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setWeatherData(result.data)
    setLoading(false)
  }

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
              <ArrowLeft size={21} color="#F5F5F5" />
            </TouchableOpacity>

            <View style={detailsStyles.hearder}>
              <Text style={detailsStyles.title}>Clima Atual</Text>
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
              <HourlyForecast />
            )}

            {!loading && !error && weatherData && (
              <DaulyForecast />
            )}
          </ImageBackground>
        )}

      </ScrollView>

    </SafeAreaView>
  )
}