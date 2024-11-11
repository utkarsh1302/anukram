import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Flex, Popover, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import Anukram from "../../assets/anukram_logo.ico";
import { useState } from "react";
import "./AnukramHeader.css";

const componentClassName: string = "AnukramHeader";

interface IAnukramHeader {
  handleCollapsedBtnClick: () => void;
  isCollapsed: boolean;
}

const AnukramHeader = ({
  handleCollapsedBtnClick,
  isCollapsed,
}: IAnukramHeader) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <Header className="pl-1 pr-5 h-14 ml-2 mr-2 mt-2 rounded-md border-color1 border-2">
      <Flex align="center" wrap="wrap" className="h-full flex justify-between">
        <Flex className="h-full">
          <Button
            type="text"
            className={`${componentClassName}_toggleBtn`}
            icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={handleCollapsedBtnClick}
            style={{
              width: 56,
              height: 56,
            }}
          />
          <img width="58px" height="44px" src={Anukram} alt="Anukram" />
          <Typography.Title level={3} className="!mb-0 flex items-center mt-2">
            Anukram
          </Typography.Title>
        </Flex>
        <Popover
          placement="bottomRight"
          title={"User Profile"}
          content={
            <Button danger block>
              Logout
            </Button>
          }
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <Avatar size="large" icon={<UserOutlined />} />
        </Popover>
      </Flex>
    </Header>
  );
};

export default AnukramHeader;
