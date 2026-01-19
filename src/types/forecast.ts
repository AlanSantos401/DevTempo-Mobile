import { Main, Weather, Wind } from './weather'

/**
 * Item de previsão (3h)
 */
export interface ForecastItem {
  dt: number
  main: Main
  weather: Weather[]
  wind: Wind
  dt_txt: string
}

/**
 * Cidade da previsão
 */
export interface ForecastCity {
  name: string
  country: string
  timezone: number
}

/**
 * Resposta do endpoint /forecast
 */
export interface ForecastResponse {
  list: ForecastItem[]
  city: ForecastCity
  cod: string
}
