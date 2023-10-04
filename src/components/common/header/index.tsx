import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu as MenuIcon } from "lucide-react";
import { ThemeSwitch } from "@/components/common/theme-switch";

import Link from "next/link";

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

const Header = () => {
  return (
    <Container
      as="header"
      className="flex items-center px-4 py-2 justify-between bg-zinc-200 dark:bg-zinc-900 rounded-xl h-[52px] max-w-[1200px] my-4 shadow-lg"
    >
      <h1 className="text-lg font-bold text-xinc-800 dark:text-white p-4">
        Logo
      </h1>

      <Sheet>
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
            <li>
              <ThemeSwitch />
            </li>
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
          <li className="flex items-center gap-2">
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </Container>
  );
};

Header.displayName = "Header";

export { Header };
