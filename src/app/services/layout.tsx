import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Informatiques & Dépannage PC à Auterive | JimmyTech",
  description: "Dépannage informatique, suppression de virus, installation Windows, et création de sites web à Auterive et Toulouse. Intervention rapide sur site ou à distance.",
  keywords: ["Dépannage informatique Auterive", "Réparation PC Toulouse", "Nettoyage virus", "Installation Windows", "Assistance informatique", "JimmyTech Services"],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
