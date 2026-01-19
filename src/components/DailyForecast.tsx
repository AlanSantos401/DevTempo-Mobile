import { DailyForecastStyle } from "@/styles/DailyForescat.styles";
import { Text, View } from "react-native";


export default function DaulyForecast() {
  return (
    <View style={DailyForecastStyle.container}>
      <View style={DailyForecastStyle.cardDay}>
        <View style={DailyForecastStyle.Date}>
          <Text>SEG</Text>
          <Text>19/01</Text>
        </View>

        <Text>🌤️</Text>
        <Text>23°/35°</Text>
      </View>

      <View style={DailyForecastStyle.cardDay}>
        <View style={DailyForecastStyle.Date}>
          <Text>TER</Text>
          <Text>19/01</Text>
        </View>

        <Text>🌤️</Text>
        <Text>23°/35°</Text>
      </View>

      <View style={DailyForecastStyle.cardDay}>
        <View style={DailyForecastStyle.Date}>
          <Text>QUA</Text>
          <Text>19/01</Text>
        </View>

        <Text>🌤️</Text>
        <Text>23°/35°</Text>
      </View>

      <View style={DailyForecastStyle.cardDay}>
        <View style={DailyForecastStyle.Date}>
          <Text>QUI</Text>
          <Text>19/01</Text>
        </View>

        <Text>🌤️</Text>
        <Text>23°/35°</Text>
      </View>

      <View style={DailyForecastStyle.cardDay}>
        <View style={DailyForecastStyle.Date}>
          <Text>SEX</Text>
          <Text>19/01</Text>
        </View>

        <Text>🌤️</Text>
        <Text>23°/35°</Text>
      </View>
    </View>
  )
}