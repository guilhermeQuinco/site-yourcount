import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FaqStructure({ items }) {
  return (
    <Accordion type="single" collapsible className="lg:w-[50%] w-full ">
      {items.map((item) => (
        <AccordionItem value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
