import { cn } from "../../lib/utils";

export function Separator({ className }) {
  return <div className={cn(["w-full h-[2px] bg-[#f22e9a]", className])}></div>;
}
