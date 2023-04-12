function solution(D) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const sortedDates = Object.keys(D).sort();

  const output = {};
  for (let i = 0; i < daysOfWeek.length; i++) {
    output[daysOfWeek[i]] = 0;
  }

  for (let i = 0; i < sortedDates.length; i++) {
    const date = sortedDates[i];
    const value = D[date];
    const dayOfWeek = new Date(date).toLocaleDateString("en-US", { weekday: "short" });
    output[dayOfWeek] += value;

    // Interpolate missing days
    if (i < sortedDates.length - 1) {
      const nextDate = sortedDates[i + 1];
      const numMissingDays = daysOfWeek.indexOf(new Date(nextDate).toLocaleDateString("en-US", { weekday: "short" })) 
        - daysOfWeek.indexOf(dayOfWeek) - 1;

      if (numMissingDays > 0) {
        const nextValue = D[nextDate];
        const prevValue = D[date];
        for (let j = 1; j <= numMissingDays; j++) {
          const missingDayOfWeek = daysOfWeek[daysOfWeek.indexOf(dayOfWeek) + j];
          const interpolatedValue = Math.round((j * nextValue + (numMissingDays - j) * prevValue) / numMissingDays);
          output[missingDayOfWeek] += interpolatedValue;
        }
      }
    }
  }

  return output;
}

