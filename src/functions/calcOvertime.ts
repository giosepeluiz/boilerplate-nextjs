// ===================================================
// Função que calcula as horas extras
// Por padrão ela retorna as horas totais trabalhadas
// Ao mudar a variável OVERTIME para TRUE ao chamar a função, ela retorna apenas as horas extras
// ===================================================

function calcOvertime(
  start: string,
  end: string,
  overtime: boolean = false,
  holiday: boolean = false,
  dinner: boolean = false,
) {
  const worktime = dinner ? 28800 : 32400; // 8 horas normais de trabalho, mais 1 hora de intervalo (desconsiderado se jantar for true)
  const startArray = start.split(":").map(Number); // Hora inicial de trabalho
  const endArray = end.split(":").map(Number); // Hora final de trabalho

  const startInSeconds = (startArray[0] * 60 + startArray[1]) * 60;
  const endInSeconds = (endArray[0] * 60 + endArray[1]) * 60;

  let seconds = overtime ? endInSeconds - startInSeconds - worktime : endInSeconds - startInSeconds;

  if (holiday && overtime) {
    seconds *= 2; // Duplica as horas extras se for feriado e houver horas extras
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

export default calcOvertime;
