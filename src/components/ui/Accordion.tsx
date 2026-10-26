"use client";

import { useId, useState } from "react";
import { Plus } from "@phosphor-icons/react";

type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-t border-ink/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-ink/10">
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-ink/60"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-[9px] tracking-[0.1em] text-ink/30">
                    0{index + 1}
                  </span>
                  <span className="text-[15px] font-medium leading-6 tracking-[-0.02em] text-ink sm:text-base">
                    {item.question}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-[transform,background-color,border-color] duration-300 ${
                    isOpen
                      ? "rotate-45 border-ink bg-ink text-paper"
                      : "border-ink/15 text-ink/60 group-hover:border-ink/35"
                  }`}
                >
                  <Plus size={13} weight="bold" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="accordion-grid"
              data-open={isOpen ? "true" : "false"}
            >
              <div>
                <p className="max-w-[62ch] pb-6 pl-0 text-[13px] leading-6 text-muted sm:pl-8">
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
