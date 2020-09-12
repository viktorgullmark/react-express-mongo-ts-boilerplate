import { observable, action } from 'mobx';
import { RootStore } from './rootStore';

export class StoreBase {
  @observable isLoading: boolean = false;

  constructor(public rootStore: RootStore) {}

  @action.bound setIsLoading = (loading: boolean) => {
    this.isLoading = loading;
  };
}
