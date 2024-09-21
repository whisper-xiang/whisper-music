import React from "react";
import { Layout } from "antd";

const { Header, Sider, Content, Footer } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#ffa940", padding: "0 16px" }}>
        Header
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "#ffc069" }}>
          Nav
        </Sider>
        <Layout>
          <Content style={{ background: "#b7eb8f", padding: "16px" }}>
            {children} {/* 这里渲染传入的子组件 */}
          </Content>
          <Footer style={{ background: "#91d5ff", textAlign: "center" }}>
            Footer
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
