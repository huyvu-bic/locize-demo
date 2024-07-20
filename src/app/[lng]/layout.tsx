import AboutUs from "@/features/user/components/AboutUs";
import { PropsWithChildren } from "react";

type HomeLayoutProps = PropsWithChildren;

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const contentClassName = `container mx-auto h-full flex items-center justify-evenly`;
  const containerClassName = `w-screen h-screen p-16 bg-cover bg-left-bottom bg-[url('/images/auth_bg.png')]`;

  return (
    <div className={containerClassName}>
      <div className={contentClassName}>
        <div className={"max-w-[500px]"}>
          <AboutUs />
        </div>
        <div className={`w-full max-w-[436px]`}>{children}</div>
      </div>
    </div>
  );
}
