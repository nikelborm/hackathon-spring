import React, { useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { authedFallbackRoute, notAuthedFallbackRoute, routes } from './routes';
import {
  PieChartOutlined,
  CalendarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, PageHeader } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const location = useLocation();
  console.log('🚀 ~ file: App.tsx ~ line 18 ~ App ~ location', location);

  return (
    <Switch>
      {Object.entries(routes).map(
        ([key, { Component, forAuthed, title, description, ...rest }]) => (
          <Route
            key={key}
            {...rest}
            exact
            render={() =>
              forAuthed ? (
                localStorage.getItem('authed') === 'authed' ? (
                  <AuthedPageWrapper title={title} description={description}>
                    <Component />
                  </AuthedPageWrapper>
                ) : (
                  <Redirect to={notAuthedFallbackRoute} />
                )
              ) : localStorage.getItem('authed') === 'authed' ? (
                <Redirect to={authedFallbackRoute} />
              ) : (
                <Component />
              )
            }
          />
        )
      )}
      <Route
        path="/*"
        render={() =>
          localStorage.getItem('authed') === 'authed' ? (
            <Redirect to={authedFallbackRoute} />
          ) : (
            <Redirect to={notAuthedFallbackRoute} />
          )
        }
      />
    </Switch>
  );
}

function AuthedPageWrapper({ children, title, description }) {
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
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <PageHeader
            className="site-page-header"
            title={title}
            subTitle={description}
          />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Tickers</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
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
