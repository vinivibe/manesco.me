/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "João Felipe Manesco: Customer Success & Product Management Expert",
  description:
    "Descubra o portfólio profissional de João Felipe Manesco, destacando sua expertise em Customer Success e Gestão de Produtos. Este portfólio, elaborado com Tailwind CSS e Material Tailwind, serve como vitrine para suas soluções inovadoras e abordagens eficientes em diversos projetos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>  
        
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
