const sumOvertime = (value) => {
  let totalHours = 0;
  let totalMinutes = 0;
  value.map((item) => {
    const [hours, minutes] = item.split(":");
    totalHours += Number(hours);
    totalMinutes += Number(minutes);
    return null;
  });

  if (totalMinutes > 60) {
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;
  }
  return `${totalHours.toString().padStart(2, "0")}:${totalMinutes.toString().padStart(2, "0")}`;
};

export default sumOvertime;
