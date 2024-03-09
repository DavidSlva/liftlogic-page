import {
  AndroidOutlined,
  AppleOutlined,
  ChromeOutlined,
  CloudOutlined,
  DesktopOutlined,
  OpenAIOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space } from "antd";
import React from "react";

type Props = {};

const elements = [
  {
    icon: <AndroidOutlined />,
    title: "Android",
    className: "card-android__hover",
  },
  { icon: <AppleOutlined />, title: "iOS", className: "card-ios__hover" },
  {
    icon: <OpenAIOutlined />,
    title: "Chatbots",
    className: "card-chatbots__hover",
  },
  {
    icon: <ChromeOutlined />,
    title: "WebApp",
    className: "card-webapp__hover",
  },
  {
    icon: <DesktopOutlined />,
    title: "Escritorio",
    className: "card-cloud__hover",
  },
];

const PlatformCardList = (props: Props) => {
  return (
    <Row gutter={30} className="!m-0" align="middle" justify="center">
      {elements.map((element) => (
        <Col key={element.title} span={4}>
          <Card
            cover={<div className=" text-4xl">{element.icon}</div>}
            className={`!pt-2 ${element.className}`}
          >
            {element.title}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PlatformCardList;
