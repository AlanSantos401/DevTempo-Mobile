import { getWeatherIcon } from "@/services/weatherService"
import { weatherCardStyles } from "@/styles/weatherCard.styles"
import { WeatherData } from "@/types/weather"
import { Image, Text, View } from "react-native"
import { Temperature } from "./temperatureColor"


interface WeatherProps {
  weather: WeatherData

}

export default function WeatherCard({ weather }: WeatherProps) {

  return (
    <View style={weatherCardStyles.card}>
      <Text style={weatherCardStyles.cityName}>{weather.name}</Text>
      {weather.weather[0] && <Image
        style={weatherCardStyles.weatherIcon}
        source={{ uri: getWeatherIcon(weather.weather[0].icon) }}
      />}

      <Text style={weatherCardStyles.temperature}>
        <Temperature value={weather.main.temp} />
      </Text>

      {weather.weather[0] && <Text style={weatherCardStyles.description}>
        {weather.weather[0].description}
      </Text>
      }
      <View style={weatherCardStyles.detailsContainer}>
        <View style={weatherCardStyles.detailsItems}>
          <Text style={weatherCardStyles.detailsLabel}>Sensação Térmica:</Text>
          <Text style={weatherCardStyles.detailsValue}>{Math.round(weather.main.feels_like)} °C</Text>
        </View>

        <View style={weatherCardStyles.detailsItems}>
          <Text style={weatherCardStyles.detailsLabel}>Umidade:</Text>
          <Text style={weatherCardStyles.detailsValue}>{weather.main.humidity}%</Text>
        </View>

        <View style={weatherCardStyles.detailsItems}>
          <Text style={weatherCardStyles.detailsLabel}>Vento:</Text>
          <Text style={weatherCardStyles.detailsValue}>{weather.wind.speed} m/s</Text>
        </View>
      </View>
    </View>

  )

}