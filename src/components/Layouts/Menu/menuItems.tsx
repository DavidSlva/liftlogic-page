import {
  HomeOutlined,
  InstagramOutlined,
  MailOutlined,
  ProductOutlined,
  TeamOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  XOutlined,
} from "@ant-design/icons";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { ItemsKey } from "./MenuTypes";
import data from "@/assets/data/contact";
import Link from "next/link";

const contactUs: MenuItemType[] = [
  {
    key: "whatsapp",
    label: data.whatsapp,
    icon: <WhatsAppOutlined />,
    className: "sider-item-whatsapp",
  },
  {
    key: "instagram",
    label: data.instagram,
    icon: <InstagramOutlined />,
    className: "sider-item-instagram",
  },
  {
    key: "twitter",
    label: data.twitter,
    icon: <XOutlined />,
    className: "sider-item-twitter",
  },
];
const defaultItems: MenuItemType[] = [
  {
    key: "inicio",
    icon: <HomeOutlined />,
    label: <Link href="/">Inicio</Link>,
  },
  {
    key: "sobre_nosotros",
    icon: <TeamOutlined />,
    label: <Link href="sobre_nosotros">Sobre Nosotros</Link>,
    // label: "Sobre Nosotros",
  },
  // {
  //   key: "proyectos",
  //   icon: <ProductOutlined />,
  //   label: "Proyectos",
  //   //@ts-ignore
  //   children: [
  //     {
  //       key: "liftlogicapp",
  //       // icon: <ProductOutlined />,
  //       label: "LiftLogic App",
  //       className: "sider-elevated-text",
  //     },
  //     {
  //       key: "smartboluscalculator",
  //       // icon: <ProductOutlined />,
  //       label: "Smart Bolus Calculator",
  //       className: "sider-elevated-text",
  //     },
  //   ],
  // },

  {
    key: "contactanos",
    icon: <MailOutlined />,
    label: <Link href="contactanos">Contáctanos</Link>,
  },
];
const menuItems = (type?: ItemsKey) => {
  if (type === "contactus") {
    return contactUs;
  }
  return defaultItems;
};

export default menuItems;
