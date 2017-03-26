import { Observable } from 'rxjs/Observable';

import UsersService, { IUsersService } from '../services/user/users.service';
import { IUser } from '../interfaces/IUser';

export class UsersController implements IUsersController {
  constructor (
    private userService: IUsersService
  ) {
  }

  public getUser (id: number, token: string): Observable<IUser> {
    return this.userService.verifyUser(token, id)
    .flatMap(verifyied => {
      if (!verifyied) {
        return Observable.throw('User verification error');
      }
      return this.userService.getUser(id);
    });
  };

  public getCurrentUser (token: string): Observable<IUser> {
    return this.userService.getCurrentUser(token);
  }

  public makeUser (user: IUser): Observable<any> {
    return this.userService.makeUser(user);
  }
}

export interface IUsersController {
  getUser (id: number, token: string): Observable<IUser>;
  makeUser (user: IUser): Observable<any>;
}

export default new UsersController (
  UsersService
);
