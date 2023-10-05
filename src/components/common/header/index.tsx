import { HeaderMenu } from "./header-menu/header-menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-zinc-200 dark:bg-zinc-950 dark:bg-opacity-40 backdrop-filter backdrop-blur-md bg-opacity-40 shadow-sm shadow-zinc-200/60 dark:shadow-zinc-800/50 mb-4 h-[52px] absolute w-full">
      <div className="flex items-center px-4 py-2 justify-between h-full max-w-[1200px] mx-auto">
        <Link href="/">
          <h1 className="text-lg font-semibold text-zinc-800 dark:text-white p-4">
            Logo
          </h1>
        </Link>
        <HeaderMenu />
      </div>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
