function formatDate(date, type = "full") {
  const data = new Date(date);

  // Obtém os valores do dia, mês e ano
  const day = String(data.getDate()).padStart(2, "0");
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const year = String(data.getFullYear());

  if (type === "full") {
    // Retorna a data formatada no formato DD-MM-AAAA
    return `${year}-${month}-${day}`;
  }
  if (type === "mmyyyy") {
    // Retorna a data formatada no formato MM-AAAA
    return `${month}-${year}`;
  }
  // Caso o tipo não seja válido, retorna a data completa por padrão
  return `${year}-${month}-${day}`;
}

export default formatDate;
