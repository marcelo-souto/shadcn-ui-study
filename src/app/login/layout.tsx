import React from "react";

type LoginLayoutProps = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <main className="grid grid-cols-6 min-h-screen">
      <div className="hidden md:flex md:col-span-3 xl:col-span-4 bg-[url('/login-background-4.png')] bg-center bg-cover bg-no-repeat" />
      <div className="self-center col-span-6 md:col-span-3 xl:col-span-2 px-2">
        {children}
      </div>
    </main>
  );
}
