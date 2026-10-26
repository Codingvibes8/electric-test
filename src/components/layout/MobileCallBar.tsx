"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Phone } from "@phosphor-icons/react";
import { site } from "@/data/site";
import { phoneHref } from "@/lib/utils";

export function MobileCallBar() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-15% 0px 0px 0px", threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={reduceMotion ? false : { y: "100%" }}
          animate={{ y: 0 }}
          exit={reduceMotion ? undefined : { y: "100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label="Quick contact"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 px-3 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-lg gap-2.5">
            <a
              href={phoneHref(site.phone)}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 bg-chalk text-[12px] font-semibold text-ink transition-colors active:bg-paper-deep"
            >
              <Phone size={16} weight="fill" aria-hidden="true" />
              Call now
            </a>
            <a
              href="#quote"
              className="btn-sheen inline-flex h-12 flex-[1.3] items-center justify-center gap-2 rounded-full bg-ink text-[12px] font-semibold text-paper transition-colors active:bg-ink-soft"
            >
              Get a free quote
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
