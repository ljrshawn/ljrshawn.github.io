"use client";

import { useEffect, useMemo, useState } from "react";
import { Download } from "lucide-react";
import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function SegmentViewNode({ item, isActive, onSelect }) {
  return (
    <a
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      onClick={() => onSelect(item.href)}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium transition",
        isActive
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {item.label}
    </a>
  );
}

export function SegmentViewNav() {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#about");
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    [],
  );

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const headerOffset = 88;
      let nextHref = navItems[0]?.href ?? "#about";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= headerOffset) {
          nextHref = `#${id}`;
        }
      });

      const isAtPageBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;

      if (isAtPageBottom) {
        nextHref = navItems[navItems.length - 1]?.href ?? nextHref;
      }

      setActiveHref(nextHref);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
        >
          <img
            src={profile.icon}
            alt=""
            aria-hidden="true"
            className="h-6 w-6 shrink-0"
          />
          <span>Shawn Lyu</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <SegmentViewNode
              key={item.href}
              item={item}
              isActive={activeHref === item.href}
              onSelect={setActiveHref}
            />
          ))}
        </div>
        <Button asChild size="sm">
          <a href={profile.resume} target="_blank" rel="noreferrer">
            <Download className="h-4 w-4" />
            Resume
          </a>
        </Button>
      </nav>
    </header>
  );
}
