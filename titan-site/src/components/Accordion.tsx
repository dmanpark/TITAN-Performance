"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  dark?: boolean;
}

export default function Accordion({ items, dark = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border-b ${dark ? "border-white/[0.08]" : "border-navy/10"}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`w-full flex justify-between items-center py-5 font-heading font-bold text-sm uppercase tracking-[0.05em] text-left ${
                dark ? "text-white/80 hover:text-white" : "text-navy"
              } transition-colors duration-150`}
            >
              <span>{item.question}</span>
              <span
                className={`text-xl transition-transform duration-300 ease-out flex-shrink-0 ml-4 ${
                  isOpen ? "rotate-45" : ""
                } ${dark ? "text-white/40" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-5 text-sm leading-relaxed ${
                    dark ? "text-white/40" : "text-steel"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
