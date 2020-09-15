import { action, observable } from 'mobx';
import { StoreBase } from './storeBase';

export class RouterStore extends StoreBase {
  // todo: fix typings for history obj
  @observable history?: any = undefined;

  @action.bound setHistory = (history: any) => {
    this.history = history;
  };

  @action.bound redirect = (path: string) => {
    if (this.history) {
      this.history.push(path);
    }
  };
}
