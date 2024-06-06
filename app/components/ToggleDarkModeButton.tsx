"use client";
import React from "react";
import { useDarkMode } from "../context/DarkMode";
import { Switch } from "@/components/ui/switch";

const ToggleDarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode-toggle"
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
      />
    </div>
  );
};

export default ToggleDarkModeButton;
