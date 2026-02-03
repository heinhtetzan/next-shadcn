import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <>
      <section id="auth-layout" className=" flex min-h-svh px-10 pt-28 ">
        {children}
      </section>
    </>
  );
}

export default AuthLayout;
