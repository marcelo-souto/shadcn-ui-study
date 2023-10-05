"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { ThemeSwitch } from "../../theme-switch";
import { motion } from "framer-motion";
import { useWindowSize } from "@/utils/hooks/use-window-size";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Inscreva-se",
    href: "/subscription",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HeaderMenu = () => {

  const pathname = usePathname();
  const { width } = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevWidth, setPrevWidth] = useState(width);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevWidth !== width && width > 640) {
    setPrevWidth(width);
    setIsMenuOpen(false);
  }

  if(prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  return (
    <Fragment>
      <Sheet
        open={isMenuOpen}
        onOpenChange={() => setIsMenuOpen((prev) => !prev)}
      >
        <SheetTrigger className="sm:hidden">
          <MenuIcon />
        </SheetTrigger>

        <SheetContent side="right" className="min-h-full">
          <SheetHeader>
            <SheetTitle className="text-center">Menu</SheetTitle>
          </SheetHeader>

          {isMenuOpen && (
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2 pt-4 h-full relative"
            >
              {navItems.map(({ name, href }) => (
                <motion.li variants={item} key={name}>
                  <Button
                    variant="ghost"
                    className="rounded-xl w-full justify-start py-6"
                    asChild
                  >
                    <Link href={href}>{name}</Link>
                  </Button>
                </motion.li>
              ))}
              <li className="absolute bottom-6 self-center">
                <ThemeSwitch />
              </li>
            </motion.ul>
          )}
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
          <li className="flex items-center gap-2">
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

HeaderMenu.displayName = "HeaderMenu";

export { HeaderMenu };
