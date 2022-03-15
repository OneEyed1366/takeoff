import { FunctionComponent, ReactNode } from 'react';
import HomePage from '../pages/Home';

const initialRoute = '/';
const usersRoute = '/users';

export interface routeInterface {
  [value: string]: {
    path: string,
    name?: string,
  }
}

export const routes: routeInterface = {
  initial: {
    path: initialRoute, name: 'Home',
  },
  users: {
    path: usersRoute, name: 'Users'
  },
};
