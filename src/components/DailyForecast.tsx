import { View, Text, Image } from "react-native"
import { DailyForecastItem } from "@/types/forecast"
import { DailyForecastStyle } from "@/styles/DailyForescat.styles"


interface DailyForecastProps {
  data: DailyForecastItem[]
}

export default function DailyForecast({ data }: DailyForecastProps) {
  return (
    <View style={DailyForecastStyle.container}>
      {data.map((item, index) => (
        <View key={index} style={DailyForecastStyle.cardDay}>
          {/* Dia e data */}
          <View style={DailyForecastStyle.Date}>
            <Text>{item.day}</Text>
            <Text>{item.date}</Text>
          </View>

          {/* Ícone */}
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${item.icon}@2x.png`,
            }}
            style={{ width: 40, height: 40 }}
          />

          {/* Temperaturas */}
          <Text>
            {item.min}° / {item.max}°
          </Text>
        </View>
      ))}
    </View>
  )
}
