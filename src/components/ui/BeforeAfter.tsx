"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowsHorizontal } from "@phosphor-icons/react";

export function BeforeAfter() {
  const [position, setPosition] = useState(52);

  return (
    <div>
      <div className="ba-shell group relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink shadow-soft">
        <div className="relative aspect-[4/3] sm:aspect-[16/11]">
          <Image
            src="/images/fuse-board.jpg"
            alt="After: a clean, labelled consumer unit with RCBO protection"
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src="/images/panel-night.jpg"
              alt="Before: an older electrical installation being worked on"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover brightness-[0.62] grayscale"
            />
            <div className="absolute inset-0 bg-ink/30" />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/30" />

          <span className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/65 backdrop-blur-md">
            Before
          </span>
          <span className="absolute right-4 top-4 z-20 rounded-full border border-ink/10 bg-paper/90 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/65 backdrop-blur-md">
            After
          </span>

          <div
            className="absolute inset-y-0 z-20 w-px bg-paper/90"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          />
          <div
            className="ba-handle pointer-events-none absolute top-1/2 z-20 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-paper text-ink shadow-lg"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            <ArrowsHorizontal size={17} weight="bold" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-4 sm:p-5">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-volt">
                Consumer unit upgrade
              </p>
              <p className="mt-1 text-[13px] font-medium text-paper">
                Guildford · GU1
              </p>
            </div>
            <span className="hidden items-center gap-1.5 rounded-full border border-white/15 bg-ink/50 px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.14em] text-paper/50 backdrop-blur-md sm:flex">
              Drag to compare
            </span>
          </div>

          <label htmlFor="before-after-range" className="sr-only">
            Reveal the before or after image
          </label>
          <input
            id="before-after-range"
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Before and after comparison"
            aria-valuetext={`${position}% of the before image visible`}
            className="ba-range absolute inset-0 z-30 h-full w-full opacity-0"
          />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-4 text-[10px] text-muted">
        <p>Illustrative project photography.</p>
        <p className="font-mono uppercase tracking-[0.14em] text-ink/35">
          18th Edition board
        </p>
      </div>
    </div>
  );
}
