import axios from 'axios'
import { WeatherError } from '@/types/weather'
import { ForecastResponse } from '@/types/forecast'

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    lang: 'pt_br',
    units: 'metric'
  }
})

export type ForecastResult =
  | { success: true; data: ForecastResponse }
  | { success: false; error: string }

export const getForecastWeather = async (
  cityName: string
): Promise<ForecastResult> => {
  try {
    const response = await api.get<ForecastResponse>('/forecast', {
      params: { q: cityName }
    })

    return {
      success: true,
      data: response.data
    }
  } catch (err) {
    if (axios.isAxiosError<WeatherError>(err) && err.response) {
      return {
        success: false,
        error: 'Erro ao buscar previsão'
      }
    }

    return {
      success: false,
      error: 'Erro inesperado'
    }
  }
}
