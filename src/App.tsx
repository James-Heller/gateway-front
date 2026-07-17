import { Layout, Menu } from "antd";
import "./App.css";
import { Outlet } from "react-router-dom";

const { Content, Header, Sider } = Layout;

const menus: Array<{ key: string; label: string }> = [
  {
    key: "dashboard",
    label: "导航页",
  },
  {
    key: "user_manage",
    label: "用户管理",
  },
];

function App() {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <span>Demo LOGO</span>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            style={{ height: "100%" }}
            items={menus}
          />
        </Sider>
        <Content style={{ padding: 24, background: "#fff" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
