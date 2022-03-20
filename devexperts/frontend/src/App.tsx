import React, { useState } from 'react';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { authedFallbackRoute, notAuthedFallbackRoute, routes } from './routes';
import {
  PieChartOutlined,
  CalendarOutlined,
  UserOutlined,
  FolderOpenOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Layout, Menu, PageHeader } from 'antd';

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
        width={300}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="Tickers" icon={<PieChartOutlined />}>
            <Link to="/tickers">Tickers</Link>
          </Menu.Item>

          <Menu.Item key="TickersBagsList" icon={<AppstoreOutlined />}>
            <Link to="/tickerBags">Tickers Bags Gallery</Link>
          </Menu.Item>

          <SubMenu key="Profile" icon={<UserOutlined />} title="Profile">
            <Menu.Item key="Profile1">
              <Link to="/profile">Settings</Link>
            </Menu.Item>

            <Menu.Item key="Profile2">Logout</Menu.Item>
          </SubMenu>

          <Menu.Item key="empty"></Menu.Item>

          <SubMenu
            key="Calendars"
            icon={<CalendarOutlined />}
            title="Calendars"
          >
            <Menu.Item key="Calendar1">
              <Link to="/tickerBags/123/calendar">IT</Link>
            </Menu.Item>

            <Menu.Item key="Calendar2">
              <Link to="/tickerBags/123/calendar">Цветная металлургия</Link>
            </Menu.Item>

            <Menu.Item key="Calendar3">
              <Link to="/tickerBags/123/calendar">
                Топливная промышленность
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="TickerBags"
            icon={<FolderOpenOutlined />}
            title="Certain Ticker Bags"
          >
            <Menu.Item key="TickerBag1">
              <Link to="/tickerBags/123">IT</Link>
            </Menu.Item>

            <Menu.Item key="TickerBag2">
              <Link to="/tickerBags/123">Цветная металлургия</Link>
            </Menu.Item>

            <Menu.Item key="TickerBag3">
              <Link to="/tickerBags/123">Топливная промышленность</Link>
            </Menu.Item>
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
        <div style={{ margin: '16px', opacity: '0' }}></div>
        <Content style={{ margin: '0 16px' }}>
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
