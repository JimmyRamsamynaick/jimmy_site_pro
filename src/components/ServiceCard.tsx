import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
      <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
        <Icon className="h-6 w-6 text-blue-400 group-hover:text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-4 h-20 overflow-hidden">{description}</p>
      <Link href={href} className="text-blue-400 font-medium hover:text-blue-300 inline-flex items-center">
        En savoir plus <span className="ml-2">→</span>
      </Link>
    </div>
  );
}
