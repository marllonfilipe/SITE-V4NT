import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { academyEntry } from "../paths";

export const metadata: Metadata = {
  title: "Entrar | VANT Academy",
  description: "Acesse sua experiência de mentorias na VANT Academy.",
};

export default function AcademyLoginPage() {
  redirect(academyEntry);
}
