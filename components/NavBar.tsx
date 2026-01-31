import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className=" flex gap-3 text-sm text-muted-foreground">
      <Link href={`/`}>Home</Link>
      <Link href={`/register`}>Register</Link>
    </nav>
  );
}

export default NavBar;
