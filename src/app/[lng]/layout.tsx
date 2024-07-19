import { PropsWithChildren } from "react";

type HomeLayoutProps = PropsWithChildren;

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className={`w-screen h-screen p-16`}>
      <div
        className={`w-full h-full flex flex-col items-center justify-center`}
      >
        <div className={`flex-1`}>
        </div>
        <div className={`flex-1`}>{children}</div>
      </div>
    </div>
  );
}
