import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <>
      <section
        id="auth-layout"
        className=" flex min-h-svh justify-center items-center"
      >
        {children}
      </section>
    </>
  );
}

export default AuthLayout;
