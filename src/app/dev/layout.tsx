import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développeur Web Full-Stack Toulouse | JimmyTech",
  description: "Création de sites web, applications et scripts d'automatisation sur mesure. Expert React, Next.js, Node.js à Toulouse et Auterive.",
  keywords: ["Développeur Web Toulouse", "Création site internet Auterive", "Full Stack Developer", "Next.js", "React", "Automatisation", "Freelance Web"],
};

export default function DevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
