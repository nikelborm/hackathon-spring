import React from 'react';
import { Login, Register } from 'pages';

export enum Routes {
  LOGIN = '/',
  REGISTER = '/registration',
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
  main: {
    path: Routes.LOGIN,
    exact: true,
    Component: Login,
  },
  registration: {
    path: Routes.REGISTER,
    exact: true,
    Component: Register,
  },
};
