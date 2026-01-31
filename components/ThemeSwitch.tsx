"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import useThemeStore from "@/stores/useThemeStore";

function ThemeSwitch() {
  const { isDark, themeToggle } = useThemeStore();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isDark}
        onCheckedChange={themeToggle}
        id="airplane-mode"
      />
      <Label htmlFor="airplane-mode">Dark Mode</Label>
    </div>
  );
}

export default ThemeSwitch;
