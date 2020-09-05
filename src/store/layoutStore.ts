import { StoreBase } from './storeBase';
import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';

export class LayoutStore extends StoreBase {
  @persist @observable sideNavOpen: boolean = false;

  @action.bound toggleSideNavOpen = () => {
      this.sideNavOpen = !this.sideNavOpen;
  }
}
