import PlatformCardList from "@/components/Cards/PlatformCardList";
import CookieConsentModal from "@/components/Modals/Consent/CookieConsentModal";
import { MailOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "LIFT LOGIC - Eleva Tu Experiencia",
  description:
    "Con LiftLogic, eleve la experiencia de sus clientes y la operatividad de su equipo al siguiente nivel.",
  keywords: "mejora operativa, experiencia del cliente, tecnología, innovación",
};

export default function Inicio() {
  // Un estado para manejar el hover de cada tarjeta

  return (
    <>
      <div className="flex flex-col align-middle !h-full !w-full justify-center text-center">
        <Title level={1} className="!text-white !text-7xl text-center">
          LIFT LOGIC
        </Title>
        <Paragraph className="!text-xl mx-32">
          Con LiftLogic, eleve la experiencia de sus clientes y la operatividad
          de su equipo al siguiente nivel.
        </Paragraph>
        <Link href="contactanos">
          {" "}
          <Button
            icon={<MailOutlined />}
            className="w-fit m-auto !px-10 !pb-8 !text-lg"
            type="primary"
          >
            Contáctanos
          </Button>
        </Link>
        <div className="!mt-auto mb-10">
          <Title level={3} className="!text-white !text-3xl  text-center">
            Programación Avanzada para Todo lo que Necesites
          </Title>
          <PlatformCardList />
        </div>
      </div>
    </>
  );
}
