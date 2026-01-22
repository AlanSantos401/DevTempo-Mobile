
export function getWeatherBackground(
  main: string,
  icon: string
) {
  const isNight = icon.endsWith("n");

  switch (main) {
    case "Clear":
      return isNight
        ? require("../../assets/images/limpo-noite.png")
        : require("../../assets/images/limpo.png");

    case "Clouds":
      return isNight
        ? require("../../assets/images/nublado-noite.png")
        : require("../../assets/images/nublado.jpg");

    case "Drizzle":
      return isNight
        ? require("../../assets/images/garoa-noite.png")
        : require("../../assets/images/garoa.png");

    case "Rain":
      return isNight
        ? require("../../assets/images/garoa-noite.png")
        : require("../../assets/images/chuva.png");

    case "Thunderstorm":
      return require("../../assets/images/tempestade.png");

    case "Snow":
      return isNight
        ? require("../../assets/images/neve-noite.png")
        : require("../../assets/images/neve.png");

    case "Mist":
    case "Fog":
    case "Haze":
      return require("../../assets/images/neblina.jpeg");

    default:
      return isNight
        ? require("../../assets/images/limpo-noite.png")
        : require("../../assets/images/limpo.png");
  }
}

