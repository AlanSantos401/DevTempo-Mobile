import { HourlyForescastStyles } from "@/styles/HourlyForecast.styles";
import { Text, View } from "react-native";


export default function HourlyForecast() {
  return (
    <View style={HourlyForescastStyles.container

    }>
      <View style={HourlyForescastStyles.cardHourly}>
        <Text>16:00</Text>
        <Text>🌤️</Text>
      </View>
      <View style={HourlyForescastStyles.cardHourly}>
        <Text>17:00</Text>
         <Text>🌤️</Text>
      </View>
      <View style={HourlyForescastStyles.cardHourly}>
        <Text>18:00</Text>
         <Text>🌤️</Text>
      </View>
      <View style={HourlyForescastStyles.cardHourly}>
        <Text>19:00</Text>
         <Text>🌤️</Text>
      </View>
      <View style={HourlyForescastStyles.cardHourly}>
        <Text>20:00</Text>
         <Text>🌤️</Text>
      </View>
      <View style={HourlyForescastStyles.cardHourly}>
        <Text>21:00</Text>
         <Text>🌤️</Text>
      </View>
    </View>
  )
}