"use client";

import { ReactNode, useEffect } from "react";
import Header from "./Header";
import useThemeStore from "@/stores/useThemeStore";

type Props = {
  children: ReactNode;
  className: string;
};

function MainLayout({ children, className }: Props) {
  const { isDark } = useThemeStore();

  return (
    <body className={` ${className} ${isDark && "dark"}`}>
      <main
        className={`min-h-svh w-full bg-background ${isDark && "dark"}`}
        id="main-layout"
      >
        <Header />
        {children}
      </main>
    </body>
  );
}

export default MainLayout;
