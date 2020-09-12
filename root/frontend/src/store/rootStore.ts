import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';
import 'mobx-react-lite/batchingForReactDom';
import React from 'react';
import { LayoutStore } from './layoutStore';

export class RootStore {
  layoutStore: LayoutStore;
  constructor() {
    this.layoutStore = new LayoutStore(this);
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
