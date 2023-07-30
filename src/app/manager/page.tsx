import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}
      <main className={styles.main}>
        <Dashboard />
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
