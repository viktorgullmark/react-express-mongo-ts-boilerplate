import IUser from '../interfaces/user';
import { AxiosResponse } from 'axios';
import Axios from 'axios-observable';
import AppConfig from './../config/app.config';
import { Observable } from 'rxjs';
import IAuthResponse from '../interfaces/auth-response';

const authService = {
  login,
};

function login(user: IUser): Observable<AxiosResponse<IAuthResponse>> {
  return Axios.post<IAuthResponse>(`${AppConfig.baseUrl}/api/auth/local`, user);
}

export default authService;
