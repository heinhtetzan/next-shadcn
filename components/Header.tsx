import ThemeSwitch from "./ThemeSwitch";

function Header() {
  return (
    <header className=" px-10 py-5 border-b fixed left-0 top-0 bg-background text-foreground w-full flex justify-between items-center ">
      <h1>MMS IT </h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
