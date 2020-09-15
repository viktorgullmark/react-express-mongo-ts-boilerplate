import IUser from '../interfaces/user';
import { AxiosResponse } from 'axios';
import Axios from 'axios-observable';
import AppConfig from '../config/app.config';
import { Observable } from 'rxjs';
import IAuthResponse from '../interfaces/auth-response';

const userService = {
  register,
};

function register(user: IUser): Observable<AxiosResponse<IAuthResponse>> {
  return Axios.post<IAuthResponse>(
    `${AppConfig.baseUrl}/api/user/register`,
    user
  );
}

export default userService;
