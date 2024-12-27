"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const HeaderTheme = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return <Sun />;
  }

  return (
    <div>
      {theme === "dark" ? (
        <Sun
          className="cursor-pointer transition-all"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Moon
          className="cursor-pointer transition-all"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default HeaderTheme;
