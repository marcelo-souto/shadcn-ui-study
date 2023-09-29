"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { useWindowSize } from "@/utils/hooks/use-window-size";
import { Menu as MenuIcon, MoonIcon, SunMediumIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  useMemo(() => {
    if (width > 640) setIsOpen(false);
  }, [width]);

  return (
    <Container
      as="header"
      className="flex items-center px-4 py-2 justify-between bg-zinc-200 dark:bg-zinc-900 rounded-xl h-[52px] max-w-[1200px] my-4 shadow-lg"
    >
      <h1 className="text-lg font-bold text-indigo-500 p-4">Logo</h1>

      <Sheet
        open={isOpen}
        onOpenChange={() => setIsOpen((previousState) => !previousState)}
      >
        <SheetTrigger className="sm:hidden">
          <MenuIcon />
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="text-center">Menu</SheetTitle>
          </SheetHeader>

          <ul className="flex flex-col gap-4 pt-4">
            {navItems.map(({ name, href }) => (
              <li key={name}>
                <Button
                  variant="ghost"
                  className="rounded-xl w-full justify-start"
                  asChild
                >
                  <Link href={href}>{name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>

      <nav className="hidden sm:block">
        <ul className="flex gap-4">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <Button variant="ghost" className="rounded-lg" asChild>
                <Link href={href}>{name}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

About.displayName = "About";

export { About };
