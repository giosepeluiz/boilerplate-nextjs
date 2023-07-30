"use client";

import { useSearchParams } from "next/navigation";
import Table from "@/components/Table";

import Image from "next/image";
import styles from "@/styles/Home.module.scss";

function Dashboard({ month, year }) {
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

  const reference = `${year}-${month}`;

  return (
    <>
      <Table message={message} reference={reference} />
    </>
  );
}

export default function Home({ params }) {
  const { month } = params;
  const { year } = params;

  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}
      <main className={styles.main}>
        <Dashboard month={month} year={year} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Elaborado por Giosepe Luiz | Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vectors/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
