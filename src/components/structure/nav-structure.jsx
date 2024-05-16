"use client";

import { cn } from "../../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const marketingSolutions = [
  {
    name: "KPI",
    href: "/marketing-assessoria/marketing-solutions/kpi",
  },
  {
    name: "Tráfego Pago",
    href: "/marketing-assessoria/marketing-solutions/trafego-pago",
  },
  {
    name: "Mídia",
    href: "/marketing-assessoria/marketing-solutions/midia",
  },
  {
    name: "Growth",
    href: "/marketing-assessoria/marketing-solutions/growth",
  },
  {
    name: "Criativos",
    href: "/marketing-assessoria/marketing-solutions/criativos",
  },
  {
    name: "Análise de dados",
    href: "/marketing-assessoria/marketing-solutions/analise-de-dados",
  },
  {
    name: "Atendimento",
    href: "/marketing-assessoria/marketing-solutions/atendimento",
  },

  {
    name: "Landing pages",
    href: "/marketing-assessoria/marketing-solutions/landing-pages",
  },
  {
    name: "CRM",
    href: "/marketing-assessoria/marketing-solutions/crm",
  },
];

export function MainNavBar({ className }) {
  const pathname = usePathname();
  return (
    <div className="relative">
      <div className="w-full overflow-hidden">
        <div className={cn("mb-4 flex items-center flex-row gap-6", className)}>
          {marketingSolutions.map((item, index) => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                "flex  h-7 items-center rounded-md px-4 text-center text-lg transition-colors hover:bg-white",
                pathname?.startsWith(item.href) ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
