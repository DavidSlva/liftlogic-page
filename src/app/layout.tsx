import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/main.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import colors from "@/assets/colors";
import CookiesConsentProvier from "@/providers/CookiesConsentProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contáctanos - LIFT LOGIC",
  description:
    "Completa el formulario para contactarte con nosotros. Estamos listos para atender tus necesidades.",
};
const RootLayout = ({ children, ...props }: React.PropsWithChildren) => {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: colors.primary,
                colorText: colors.text,
                // borderRadius: 100,
              },
              components: {
                Layout: {
                  siderBg: colors.elevatebg,
                  headerBg: "transparent",
                  bodyBg: "transparent",
                  footerBg: colors.elevatebg,
                },
                Menu: {
                  itemBg: "transparent",
                  itemColor: colors.text,
                  itemHoverBg: colors.hoverBg,
                  itemSelectedColor: colors.text,
                  itemHoverColor: colors.primary,
                  colorBgElevated: colors.hoverBg,
                  // color
                },
                Card: {
                  // colorBgBase: colors.bg,
                  colorBgContainer: colors.elevatebg,
                },
                Tabs: {
                  colorText: "#fff",
                  itemColor: "#fff",
                },
                Input: {
                  colorTextPlaceholder: "rgba(0,0,0,0.6)",
                  colorText: "black",
                },
              },
            }}
          >
            <CookiesConsentProvier>
              <MainLayout {...props}>{children}</MainLayout>
            </CookiesConsentProvier>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};
export default RootLayout;
