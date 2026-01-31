import NavBar from "./NavBar";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  return (
    <header className=" px-10 py-5 border-b fixed left-0 top-0 bg-background text-foreground w-full flex justify-between items-center ">
      <div className=" flex items-center gap-5">
        <h1 className=" text-foreground font-bold text-xl">MMS IT </h1>
        <NavBar />
      </div>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
