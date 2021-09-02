import { NextSeo } from "next-seo";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Título de Exemplo"
        description="Descrição de Exemplo"
        openGraph={{
          type: "website",
          url: "https://www.google.com",
          title: "Título de Exemplo",
          description: "Descrição de Exemplo",
          images: [
            {
              url: "https://www.example.ie/og-image.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            { url: "https://www.example.ie/og-image-02.jpg" },
          ],
          site_name: "SiteName",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "icons/favicon.ico",
          },
        ]}
      />

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <h1 className={styles.title}>Boilerplate de NextJs</h1>

        <p className={styles.description}>Template padrão para seu projeto NextJs</p>

        <div className={styles.grid}>
          <a
            href="https://github.com/giosepeluiz/boilerplate-nextjs/blob/main/README.md"
            className={styles.card}>
            <h2>Leia as informações &rarr;</h2>
            <p>Para saber como utilizar todos os recursos que o modelo oferece.</p>
          </a>
        </div>
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
