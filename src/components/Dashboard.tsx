"use client";

import { useSearchParams } from "next/navigation";
import Table from "./Table";

function Dashboard() {
  const searchParams = useSearchParams();
  const param = searchParams.has("message") ? searchParams.get("message") : "";

  let message = "";

  switch (param) {
    case "added":
      message = "Registro adicionado com sucesso!";
      break;
    case "deleted":
      message = "Registro deletado.";
      break;
    case "updated":
      message = "Registro atualizado com sucesso.";
      break;
    default:
      message = "";
  }

  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const year = new Date().getFullYear();
  const reference = `${year}-${month}`;

  return (
    <>
      <Table message={message} reference={reference} />
    </>
  );
}

export default Dashboard;
