import WeatherCard from "@/components/WeatherCard";
import { getCurrentWeather } from "@/services/weatherService";
import { detailsStyles } from "@/styles/details.styles";
import { WeatherData } from "@/types/weather";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Details() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
const [weatherData, setWeatherData] = useState<WeatherData | null>(null)


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
        <TouchableOpacity style={detailsStyles.backButton} onPress={() => router.back()}>
          <Text style={detailsStyles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>

        <View style={detailsStyles.hearder}>
          <Text style={detailsStyles.title}>Clima Atual</Text>
          <Text style={detailsStyles.subtitle}>Buscando: {cityName}</Text>
        </View>

        {loading && (
          <View style={detailsStyles.loadingContainer}>
            <ActivityIndicator size="large" color="#4A90E2" />
            <Text style={detailsStyles.loadingText}>Carregando...</Text>
          </View>
        )}
        {!loading && error &&(
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
       
      </ScrollView>

    </SafeAreaView>
  )
}