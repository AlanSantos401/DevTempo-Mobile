import { getWeatherIcon } from "@/services/weatherService"
import { HourlyForescastStyles } from "@/styles/HourlyForecast.styles"
import { Image, Text, View } from "react-native"

interface Props {
  data: any[]
}

export default function HourlyForecast({ data }: Props) {
  return (
    <View style={HourlyForescastStyles.container}>
      <View><Text style={HourlyForescastStyles.text}>
        Próximas horas
      </Text>
      </View>

      <View style={HourlyForescastStyles.cardHourly}>
        {data.map((item, index) => {
          const hour = new Date(item.dt * 1000).getHours()

          return (
            <View
              key={index}
              style={HourlyForescastStyles.text}
            >
              <Text>{hour}h</Text>

              <Image
                source={{ uri: getWeatherIcon(item.weather[0].icon) }}
                style={HourlyForescastStyles.icon}
              />

              <Text>{Math.round(item.main.temp)}°</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}
