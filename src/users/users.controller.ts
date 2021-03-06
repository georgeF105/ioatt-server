import { Observable } from 'rxjs/Observable';

import UsersService, { IUsersService } from '../services/user/users.service';
import { IUser } from '../interfaces/IUser';

export class UsersController implements IUsersController {
  constructor (
    private userService: IUsersService
  ) {
  }

  public getUser (id: number): Observable<IUser> {
    return this.userService.getUser(id);
  };

  public makeUser (user: IUser): Observable<any> {
    return this.userService.makeUser(user);
  }
}

export interface IUsersController {
  getUser (id: number): Observable<IUser>;
  makeUser (user: IUser): Observable<any>;
}

export default new UsersController (
  UsersService
);
