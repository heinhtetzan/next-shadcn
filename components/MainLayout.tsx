"use client";

import { ReactNode } from "react";
import Header from "./Header";
import useThemeStore from "@/stores/useThemeStore";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  const { isDark } = useThemeStore();

  return (
    <>
      <main
        className={`min-h-svh w-full bg-background ${isDark && "dark"}`}
        id="main-layout"
      >
        <Header />
        {children}
      </main>
    </>
  );
}

export default MainLayout;
