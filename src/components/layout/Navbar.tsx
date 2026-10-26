"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  List,
  Phone,
  ShieldCheck,
  X,
} from "@phosphor-icons/react";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/data/site";
import { phoneHref } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Our work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
  { href: "#areas", label: "Areas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (wasOpen.current && !open) {
      triggerRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  return (
    <>
      <div className="relative z-40 bg-ink text-paper">
        <div className="container-page flex h-9 items-center justify-between gap-4">
          <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-paper/55 sm:text-[10px]">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-volt" />
              <span className="relative inline-flex size-1.5 rounded-full bg-volt" />
            </span>
            <span className="hidden sm:inline">
              24/7 emergency electrician · Guildford &amp; Surrey
            </span>
            <span className="sm:hidden">24/7 emergency call-outs</span>
          </p>
          <a
            href={phoneHref(site.phone)}
            className="link-underline font-mono text-[10px] font-medium tracking-[0.08em] text-paper/80 transition-colors hover:text-volt sm:text-[11px]"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-xl">
        <div className="container-page flex h-[72px] items-center justify-between gap-5">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={phoneHref(site.phone)}
              aria-label={`Call VoltCraft on ${site.phoneDisplay}`}
              className="hidden h-11 items-center gap-2 rounded-full border border-line bg-chalk/60 px-4 text-[12px] font-medium text-ink/80 transition-colors hover:border-ink/25 hover:text-ink lg:inline-flex xl:px-5"
            >
              <Phone size={15} weight="fill" className="text-volt" aria-hidden="true" />
              <span className="hidden xl:inline">{site.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <a
              href="#quote"
              className="btn-sheen hidden h-11 items-center gap-2 rounded-full bg-ink px-5 text-[13px] font-semibold text-paper transition-[background-color,transform] duration-300 hover:bg-ink-soft active:translate-y-px sm:inline-flex"
            >
              Get a free quote
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>

            <a
              href={phoneHref(site.phone)}
              aria-label={`Call VoltCraft on ${site.phoneDisplay}`}
              className="grid size-11 place-items-center rounded-full border border-line bg-chalk/60 text-ink transition-colors hover:border-ink/25 sm:hidden"
            >
              <Phone size={17} weight="fill" aria-hidden="true" />
            </a>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
              className="grid size-11 place-items-center rounded-full border border-line bg-chalk/60 text-ink transition-colors hover:border-ink/25 xl:hidden"
            >
              <List size={19} weight="bold" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="on-dark fixed inset-0 z-[70] overflow-y-auto bg-ink text-paper"
          >
            <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-60" />
            <div className="relative flex min-h-[100dvh] flex-col">
              <div className="container-page flex h-[72px] shrink-0 items-center justify-between border-b border-white/10">
                <Logo tone="light" />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-paper transition-colors hover:bg-white/10"
                >
                  <X size={19} weight="bold" aria-hidden="true" />
                </button>
              </div>

              <div className="container-page flex flex-1 flex-col justify-between py-10 sm:py-14">
                <nav aria-label="Mobile" className="flex flex-col">
                  {[
                    ...navLinks,
                    { href: "#faq", label: "FAQ" },
                    { href: "#quote", label: "Get a quote" },
                  ].map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-5 text-[clamp(1.8rem,7vw,2.7rem)] font-medium tracking-[-0.045em] text-paper/90 transition-colors hover:text-volt"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[10px] tracking-[0.1em] text-paper/30">
                          0{index + 1}
                        </span>
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={22}
                        weight="bold"
                        aria-hidden="true"
                        className="text-paper/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-volt"
                      />
                    </a>
                  ))}
                </nav>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <a
                    href={phoneHref(site.phone)}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-volt/40"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-volt text-ink">
                      <Phone size={19} weight="fill" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-paper/40">
                        24/7 emergency
                      </span>
                      <span className="mt-1 block text-lg font-medium">
                        {site.phoneDisplay}
                      </span>
                    </span>
                  </a>
                  <a
                    href="#quote"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-volt p-5 text-ink transition-colors hover:bg-volt-bright"
                  >
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50">
                        No obligation
                      </span>
                      <span className="mt-1 block text-lg font-semibold">
                        Get a free quote
                      </span>
                    </span>
                    <ArrowRight size={20} weight="bold" aria-hidden="true" />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/35">
                  {site.credentials.map((credential) => (
                    <span key={credential} className="flex items-center gap-2">
                      <ShieldCheck size={13} className="text-volt" aria-hidden="true" />
                      {credential}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
