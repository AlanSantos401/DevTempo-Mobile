

export function getWeatherBackground(main: string) {
  switch (main) {
    case "Clear":
      return require("../../assets/images/sol.png");

    case "Clouds":
      return require("../../assets/images/Parcialmente-nublado.png");

    case "Drizzle":
      return require("../../assets/images/garoa.png");

    case "Rain":
      return require("../../assets/images/chuva.png");

    case "Thunderstorm":
      return require("../../assets/images/tempestade.png");

    case "Snow":
      return require("../../assets/images/neve.png");

    case "Mist":
    case "Fog":
    case "Haze":
      return require("../../assets/images/neblina.jpeg");

    default:
      return require("../../assets/images/sol.png");
  }
}
