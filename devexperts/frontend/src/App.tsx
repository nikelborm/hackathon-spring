import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import {
  PieChartOutlined,
  CalendarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [isMenuCollapsed, setCollapsedMenu] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={isMenuCollapsed}
        onCollapse={setCollapsedMenu}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="Tickers" icon={<PieChartOutlined />}>
            Tickers
          </Menu.Item>
          <SubMenu
            key="Calendars"
            icon={<CalendarOutlined />}
            title="Calendars"
          >
            <Menu.Item key="Calendar1">IT</Menu.Item>
            <Menu.Item key="Calendar2">Metal Industry</Menu.Item>
          </SubMenu>
          <SubMenu key="Profile" icon={<UserOutlined />} title="Profile">
            <Menu.Item key="Profile1">Settings</Menu.Item>
            <Menu.Item key="Profile2">Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              {Object.keys(routes).map((key) => {
                const { Component, ...rest } = routes[key];
                return (
                  <Route key={key} {...rest} render={() => <Component />} />
                );
              })}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Made for Devexperts with ❤️ by nikelborm
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
