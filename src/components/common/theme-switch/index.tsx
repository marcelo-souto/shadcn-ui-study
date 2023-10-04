"use client";

import { Container } from "@/components/ui/container";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeSwitchProps extends React.HTMLAttributes<HTMLLabelElement> {}

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { setTheme, theme } = useTheme();
  const [clientTheme, setClientTheme] = useState<undefined | string>();

  const isDarkTheme = clientTheme === "dark";
  const toggleTheme = () => setTheme(clientTheme === "dark" ? "light" : "dark");

  useEffect(() => {
    setClientTheme(theme);
  }, [theme]);

  return (
    <Container as="label" className={cn("flex items-center gap-2", className)}>
      <SunMediumIcon size={16} />
      <Switch checked={isDarkTheme} onCheckedChange={toggleTheme} />
      <MoonIcon size={16} />
    </Container>
  );
};

ThemeSwitch.displayName = "ThemeSwitch";

export { ThemeSwitch };
