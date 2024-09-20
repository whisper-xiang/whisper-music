import React from "react";
import { useRouter } from "next/router";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();
  const isHome = router.pathname === "/home";
  const isList = router.pathname === "/list";

  return (
    <div>
      <header>
        <h1 className="ml-10">主页面头部</h1>
        <nav>{/* 可以添加导航链接 */}</nav>
      </header>
      <main>
        {(isHome || isList) && children}
        {!isHome && !isList && <div>欢迎来到主页</div>}
      </main>
    </div>
  );
}
