import { getCurrentWeather } from '@/services/weatherService'
import { getForecastWeather } from '@/services/weatherForecastService'

export const getFullWeather = async (city: string) => {
  const [current, forecast] = await Promise.all([
    getCurrentWeather(city),
    getForecastWeather(city)
  ])

  if (!current.success) {
    return { success: false, error: current.error }
  }

  if (!forecast.success) {
    return { success: false, error: forecast.error }
  }

  return {
    success: true,
    current: current.data,
    forecast: forecast.data
  }
}
