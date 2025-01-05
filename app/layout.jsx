import { Ubuntu, Poppins } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const ubuntu = Ubuntu({ 
  subsets: ["latin"],
  weight: [ "300", "400", "500", "700" ],
  variable: '--font-ubuntu'
 });

// const poppins = Poppins({ 
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "700" ],
//   variable: '--font-poppins'
//  });


export const metadata = {
  title: "DevBerg",
  description: "Bem-vindo ao meu portfólio! Aqui você encontrará projetos desenvolvidos com Next.js, React, TypeScript e outras tecnologias e também projetos de design. Explore minhas experiências e habilidades em desenvolvimento web e design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={ubuntu.variable}>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </body>
    </html>
  );
}
