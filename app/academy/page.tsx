import type { Metadata } from "next";
import { AcademyLanding } from "../components/AcademyLanding";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "VANT Academy | Conhecimento estratégico para quem quer crescer",
  description: "Mentorias e treinamentos gravados da VANT Academy para assistir no seu ritmo e aplicar na operação comercial.",
  alternates: { canonical: "/academy" },
};

export default function AcademyPage() {
  return <>
    <Header academy />
    <main><AcademyLanding standalone /></main>
    <Footer />
  </>;
}
