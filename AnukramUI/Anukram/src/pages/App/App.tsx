import { ProjectFilled, SnippetsFilled } from "@ant-design/icons";
import Layout from "antd/es/layout";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import Menu, { MenuProps } from "antd/es/menu";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import AnukramHeader from "../../components/AnukramHeader/AnukramHeader";
import "./App.css";

const componentClassName = "App";
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "1",
    label: <Link to={`/projects`}>Projects</Link>,
    icon: <ProjectFilled />,
  },
  {
    key: "2",
    label: <Link to={`/mytasks`}>My Tasks</Link>,
    icon: <SnippetsFilled />,
  },
];

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/login");
    }
  }, [location, navigate]);

  const handleCollapsedBtnClick = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <Layout className="h-full">
      <AnukramHeader
        handleCollapsedBtnClick={handleCollapsedBtnClick}
        isCollapsed={collapsed}
      />
      <Layout className="rounded-md p-2 box-border">
        <Sider
          width="22%"
          collapsedWidth="68px"
          className="rounded-md"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
            className="rounded-md h-full"
          />
        </Sider>
        <Content className="ml-2 rtl:ml-0 mr-0 rtl:mr-2 h-full overflow-y-auto">
          <Outlet />
        </Content>
      </Layout>
      <Footer
        className={`${componentClassName}_Footer box-border h-14 rounded-md border-color1 border-2  ml-2 mr-2 mb-2 leading-3`}
      >
        Footer
      </Footer>
    </Layout>
  );
}

export default App;
