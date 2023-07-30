import React from "react";
// eslint-disable-next-line camelcase
import { Courier_Prime } from "next/font/google";

import "@/styles/globals.scss";

export const metadata = {
  title: "Registro de Horas Extras",
  description: "Registro de Horas Extras",
};

const courierPrime = Courier_Prime({
  variable: "--font-courierPrime",
  weight: ["400"],
  style: "normal",
  preload: true,
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={courierPrime.className}>
      <body>{children}</body>
    </html>
  );
}
