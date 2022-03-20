import React from 'react';
import { Calendar, Login, Register, TickerBags, Tickers } from 'pages';
import { Profile } from 'pages/Profile';
import { EditTickerBag } from 'pages/EditTickerBag';
import { TickerBagView } from 'pages/TickerBagView';

export enum Routes {
  LOGIN = '/login',
  REGISTER = '/registration',
  TICKER_LIST = '/tickers',
  TICKER_BAG_LIST = '/tickerBags',
  TICKER_BAG_VIEW = '/tickerBags/:tickerBagId',
  EDIT_TICKER_BAG = '/tickerBags/:tickerBagId/edit',
  CALENDAR = '/tickerBags/:tickerBagId/calendar',
  PROFILE = '/profile',
}

export interface RouteEntity {
  Component: React.FC<React.PropsWithChildren<any>>;
  path?: string;
  forAuthed?: boolean;
  title?: string;
  description?: string;
}

type RoutesCollection = {
  [key: string]: RouteEntity;
};

export const routes: RoutesCollection = {
  login: {
    path: Routes.LOGIN,
    Component: Login,
  },
  registration: {
    path: Routes.REGISTER,
    Component: Register,
  },
  tickers: {
    path: Routes.TICKER_LIST,
    Component: Tickers,
    forAuthed: true,
    title: 'Tickers',
    description: 'Страница со списком всех существующих тикеров в системе',
  },
  tickerBags: {
    path: Routes.TICKER_BAG_LIST,
    Component: TickerBags,
    forAuthed: true,
    title: 'Ticker bags',
  },
  viewTickerBag: {
    path: Routes.TICKER_BAG_VIEW,
    Component: TickerBagView,
    forAuthed: true,
    title: 'Ticker bag: view',
  },
  editTickerBag: {
    path: Routes.EDIT_TICKER_BAG,
    Component: EditTickerBag,
    forAuthed: true,
    title: 'Ticker bag: edit',
  },
  calendar: {
    path: Routes.CALENDAR,
    Component: Calendar,
    forAuthed: true,
    title: 'Ticker bag: calendar',
  },
  profile: {
    path: Routes.PROFILE,
    Component: Profile,
    forAuthed: true,
    title: 'Profile',
  },
};

export const authedFallbackRoute = Routes.TICKER_BAG_LIST;
export const notAuthedFallbackRoute = Routes.LOGIN;
