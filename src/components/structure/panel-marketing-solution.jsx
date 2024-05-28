import Illustration from "../svg/illustration";
import { Separator } from "./separator";

export function PanelMarketingSolutions({ item }) {
  return (
    <section className="w-full rounded-lg bg-black border-2 border-[#f22e9a] h-[500px] flex items-center p-14">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="space-y-8 max-w-[400px]">
          <h1 className="text-white text-4xl font-bold">{item.title}</h1>
          <Separator className="w-[20%]" />
          <h2 className="text-gray-500 text-2xl ">{item.description}</h2>

          <ul className="flex flex-col gap-5 list-disc marker:text-[#f22e9a]">
            {item.topics.map((topic) => (
              <li className="text-white text-lg flex items-center gap-3">
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <Illustration className="w-[50%] h-[50%]" />
      </div>
    </section>
  );
}
