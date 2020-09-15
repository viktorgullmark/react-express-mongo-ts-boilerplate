import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';
import 'mobx-react-lite/batchingForReactDom';
import React from 'react';
import { AuthStore } from './authStore';
import { LayoutStore } from './layoutStore';
import { RouterStore } from './routerStore';
import { UserStore } from './userStore';

export class RootStore {
  layoutStore: LayoutStore;
  authStore: AuthStore;
  userStore: UserStore;
  routerStore: RouterStore;
  constructor() {
    this.layoutStore = new LayoutStore(this);
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.routerStore = new RouterStore(this);
  }
}

enableLogging({
  action: true,
  reaction: false,
  transaction: false,
  compute: false,
});

configure({ enforceActions: 'observed' });

export const rootStore = new RootStore();

const RootStoreContext = React.createContext(rootStore);

export function useStores() {
  return React.useContext(RootStoreContext);
}
