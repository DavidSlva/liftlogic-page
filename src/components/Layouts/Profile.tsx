import colors from "@/assets/colors";
import {
  ArrowRightOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <div className="flex flex-col space-y-2 ">
        <Paragraph className="!m-0">
          <span className="text-white">David Silva</span>
        </Paragraph>
        <Paragraph className="!m-0 ">
          <span className="text-white">
            Ver Perfil{" "}
            <span>
              <ArrowRightOutlined />
            </span>
          </span>
        </Paragraph>
      </div>
      <UserOutlined className="!text-white text-3xl  font-bold" />
    </>
  );
};
export default Profile;
