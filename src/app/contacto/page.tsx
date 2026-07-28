import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto — Emanuel Gomez",
};

export default function ContactoPage() {
  return <Contact />;
}
