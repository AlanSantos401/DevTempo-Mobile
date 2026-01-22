

export function getHourlyForecast(list: []) {
  return list.slice(0, 5)
}

export function getDailyForecast(list: any[]) {
  const days: any[] = [];

  list.forEach((item) => {
    if (item.dt_txt.includes("12:00:00")) {
      days.push(item);
    }
  });

  return days.slice(0, 5);
}
