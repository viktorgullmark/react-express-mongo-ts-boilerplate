import { AxiosResponse } from 'axios';
import { action, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { map } from 'rxjs/operators';
import IAuthResponse from '../interfaces/auth-response';
import IUser from '../interfaces/user';
import authService from '../services/auth.service';
import { StoreBase } from './storeBase';
import { fromStream } from 'mobx-utils';

export class AuthStore extends StoreBase {
  @persist @observable jwtToken?: string = undefined;

  @action.bound setJwtToken = (token?: string) => {
    this.jwtToken = token;
  };

  @action.bound login = (user: IUser) => {
    fromStream(
      authService.login(user).pipe(
        map((res: AxiosResponse<IAuthResponse>) => {
          this.setJwtToken(res.data.token);
          this.rootStore.routerStore.redirect('/');
        })
      )
    );
  };

  @action.bound logout = () => {
    this.setJwtToken(undefined);
    this.rootStore.routerStore.redirect('/login');
  };
}
