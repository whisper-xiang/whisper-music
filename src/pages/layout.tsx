import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        {/* 这里可以添加共享的头部内容 */}
        <nav>{/* 导航菜单 */}</nav>
      </header>
      <main>{children}</main>
      <footer>{/* 页脚内容 */}</footer>
    </div>
  );
}
