import type { Metadata } from "next";
import { AcademyAuth } from "../../components/AcademyAuth";

export const metadata: Metadata = {
  title: "Entrar | VANT Academy",
  description: "Acesse sua experiência de mentorias na VANT Academy.",
};

export default function AcademyLoginPage() {
  return <AcademyAuth />;
}
