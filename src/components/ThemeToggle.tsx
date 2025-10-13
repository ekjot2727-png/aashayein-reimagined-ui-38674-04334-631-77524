import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full focus-visible:ring-2 focus-visible:ring-accent text-[hsl(var(--sunrise-gold))] hover:text-[hsl(var(--sunrise-gold))] hover:drop-shadow-[0_0_12px_rgba(249,168,38,0.8)]"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-transform hover:rotate-12 drop-shadow-[0_0_8px_rgba(249,168,38,0.6)]" />
      ) : (
        <Sun className="h-5 w-5 transition-transform hover:rotate-180 drop-shadow-[0_0_8px_rgba(249,168,38,0.6)]" />
      )}
    </Button>
  );
};

export default ThemeToggle;
