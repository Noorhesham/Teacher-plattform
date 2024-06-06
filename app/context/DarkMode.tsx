"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
interface ContextDark {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const defaultContext: ContextDark = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};
const DarkContext = createContext<ContextDark>(defaultContext);
function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    global?.window?.matchMedia("(prefers-color-scheme: dark)")?.matches,
    "isDarkMode"
  );
  const [domLoaded, setDomLoaded] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((isDark: boolean) => !isDark);
  }
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  useEffect(
    function () {
      if (isDarkMode) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    },
    [isDarkMode]
  );
  return domLoaded && <DarkContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkContext.Provider>;
}
function useDarkMode() {
  const context = useContext(DarkContext);
  if (context === undefined) throw new Error("dark mode used outside the provider");
  return context;
}
export { DarkModeProvider, useDarkMode };
