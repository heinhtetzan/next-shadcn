import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStoreType {
  isDark: boolean;
  themeToggle: () => void;
}

const useThemeStore = create(
  persist<ThemeStoreType>(
    (set) => ({
      isDark: false,
      themeToggle: () =>
        set((state) => ({
          isDark: !state.isDark,
        })),
    }),
    {
      name: "theme-store",
    },
  ),
);

export default useThemeStore;
