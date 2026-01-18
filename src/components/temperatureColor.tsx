import { colors } from "@/styles/colors"
import { weatherCardStyles } from "@/styles/weatherCard.styles"
import { Text } from "react-native"

interface TemperatureProps {
  value: number
}

function getTemperatureColor(temp: number) {
 if(temp <= 10) return colors.tempCold
 if(temp <= 25) return colors.tempMild
 if(temp <= 35) return colors.tempWarm
 return colors.tempHot
}

export function Temperature({value}: TemperatureProps) {
  return (
    <Text
    style={[
      weatherCardStyles.temperature, {color: getTemperatureColor(value)}
    ]}>{Math.round(value)} °C</Text>
  )
}