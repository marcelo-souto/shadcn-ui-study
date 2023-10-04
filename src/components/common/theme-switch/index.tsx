"use client";

import { Container } from "@/components/ui/container";
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  console.log("Theme: ", theme)

  return (
    <Container as="label" className="flex items-center gap-2">
      <SunMediumIcon size={16} />
      <Switch checked={isDarkTheme} onCheckedChange={toggleTheme} />
      <MoonIcon size={16} />
    </Container>
  );
};

ThemeSwitch.displayName = "ThemeSwitch";

export { ThemeSwitch };
