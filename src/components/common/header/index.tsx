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
    <header className="bg-zinc-200 dark:bg-zinc-950 backdrop-filter backdrop-blur-xl bg-opacity-25 shadow-md shadow-zinc-200/60 dark:shadow-zinc-800/50 mb-4 h-[52px] absolute w-full">
      <Container className="flex items-center px-4 py-2 justify-between h-full max-w-[1200px]">
        <Link href="/">
          <h1 className="text-lg font-semibold text-zinc-800 dark:text-white p-4">
            Logo
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger className="sm:hidden">
            <MenuIcon />
          </SheetTrigger>

          <SheetContent side="right" className="min-h-full">
            <SheetHeader>
              <SheetTitle className="text-center">Menu</SheetTitle>
            </SheetHeader>

            <ul className="flex flex-col gap-4 pt-4 h-full relative">
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
              <li className="absolute bottom-6 self-center">
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
    </header>
  );
};

Header.displayName = "Header";

export { Header };
