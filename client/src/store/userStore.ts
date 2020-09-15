import { AxiosResponse } from 'axios';
import { action, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { fromStream } from 'mobx-utils';
import { map } from 'rxjs/operators';
import IAuthResponse from '../interfaces/auth-response';
import IUser from '../interfaces/user';
import userService from '../services/user.service';
import { StoreBase } from './storeBase';

export class UserStore extends StoreBase {
  @persist @observable user?: IUser = undefined;

  @action.bound setUser = (user: IUser) => {
    this.user = user;
  };

  @action.bound register = (user: IUser) => {
    fromStream(
      userService.register(user).pipe(
        map((res: AxiosResponse<IAuthResponse>) => {
          this.setUser(user);
          this.rootStore.authStore.setJwtToken(res.data.token);
          this.rootStore.routerStore.redirect('/');
        })
      )
    );
  };
}
