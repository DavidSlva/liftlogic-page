import React from "react";
import { Menu as AntMenu } from "antd";
import menuItems from "./menuItems";
import { ItemsKey } from "./MenuTypes";

type Props = {
  itemsKey?: ItemsKey;
};

const Menu = (props: Props) => {
  return <AntMenu items={menuItems(props.itemsKey)} />;
};

export default Menu;
