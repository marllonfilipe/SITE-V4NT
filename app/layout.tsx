import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import "./cases.css";
import "./testimonials.css";
import "./diagnostic.css";
import "./linkedin.css";
import "./ui-polish.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://v4nt.com.br"),
  title: "VANT | Growth Tech para operações comerciais",
  description: "Estratégia, aquisição, processo, CRM, automação e IA conectados em uma operação comercial mais previsível.",
  openGraph: { title: "VANT | Operações comerciais que funcionam", description: "Transformamos operações fragmentadas em sistemas de crescimento mais previsíveis.", type: "website", locale: "pt_BR" },
  icons: { icon: "/images/vant-symbol.png", shortcut: "/images/vant-symbol.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${inter.variable} antialiased`}>{children}</body></html>;
}
