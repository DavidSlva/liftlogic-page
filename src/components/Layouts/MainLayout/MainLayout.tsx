"use client";

import Profile from "@/components/Layouts/Profile";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import CookieConsentModal from "@/components/Modals/Consent/CookieConsentModal";
import CookieConsentBanner from "@/components/Banners/ConsentBanner";

const MainLayout = (props: React.PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState<boolean | undefined>(true);

  return (
    <Layout className="!min-h-screen body">
      <Layout>
        <Sider
          className="sider"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className=" flex flex-col justify-between h-full">
            <Menu itemsKey="default" />
            <Menu itemsKey="contactus" />
          </div>
        </Sider>
        <Layout className="px-2 ">
          <Header className="flex flex-row justify-between align-middle">
            <Image
              className="my-2"
              src="/images/logo_white.svg"
              alt="Logo Lift Logic"
              width={80}
              height={80}
            />

            <div className=" flex flex-row space-x-2 my-2">
              <Profile />
            </div>
          </Header>
          <Content className="flex flex-col">
            <div className="h-full">{props.children}</div>

            <Footer className="text-center !text-white footer">
              Sociedad de Tecnología E Innovación Limitada @
              {new Date().getFullYear()} Desarrollado por David Silva
            </Footer>
            <CookieConsentBanner />
          </Content>
        </Layout>
      </Layout>
      <CookieConsentModal />
    </Layout>
  );
};

export default MainLayout;
