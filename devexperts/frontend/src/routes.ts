import React from 'react';
import { Calendar, Login, Register, TickerBags, Tickers } from 'pages';
import { Profile } from 'pages/Profile';
import { EditTickerBag } from 'pages/EditTickerBag';

export enum Routes {
  LOGIN = '/login',
  REGISTER = '/registration',
  TICKER_LIST = '/tickers',
  TICKER_BAG_LIST = '/tickerBags',
  EDIT_TICKER_BAG = '/tickerBags/:tickerBagId/edit',
  CALENDAR = '/tickerBags/:tickerBagId/calendar',
  PROFILE = '/profile',
}

export interface RouteEntity {
  Component: React.FC<React.PropsWithChildren<any>>;
  path?: string;
  exact?: boolean;
}

type RoutesCollection = {
  [key: string]: RouteEntity;
};

export const routes: RoutesCollection = {
  login: {
    path: Routes.LOGIN,
    exact: true,
    Component: Login,
  },
  registration: {
    path: Routes.REGISTER,
    exact: true,
    Component: Register,
  },
  tickers: {
    path: Routes.TICKER_LIST,
    exact: true,
    Component: Tickers,
  },
  tickerBags: {
    path: Routes.TICKER_BAG_LIST,
    exact: true,
    Component: TickerBags,
  },
  editTickerBag: {
    path: Routes.EDIT_TICKER_BAG,
    exact: true,
    Component: EditTickerBag,
  },
  calendar: {
    path: Routes.CALENDAR,
    exact: true,
    Component: Calendar,
  },
  profile: {
    path: Routes.PROFILE,
    exact: true,
    Component: Profile,
  },
};
