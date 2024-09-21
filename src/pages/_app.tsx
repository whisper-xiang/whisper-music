import type { AppProps } from "next/app";
import "normalize.css";
import "../styles/globals.css";
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig"; // 更新这里的导入路径

function MyApp({ Component, pageProps }: AppProps) {
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>;
}

export default MyApp;
