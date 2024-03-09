import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import type { AppProps } from "next/app";

import { register } from "swiper/element/bundle";
register();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Sider>
        <Menu></Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer>
          Lift Logic @{new Date().getFullYear()} Creado por David Silva
        </Footer>
      </Layout>
    </Layout>
  );
}
