import { Observable } from 'rxjs/Observable';

import UserService from './users.service';
import { IUsersService } from './users.service';
import { IUser } from './IUser';

export class UsersController implements IUsersController {
  constructor (
    private userService: IUsersService
  ) {
  }

  public getUser (id: number): Observable<IUser> {
    return this.userService.getUser(id);
  };
}

export interface IUsersController {
  getUser (id: number): Observable<IUser>;
}

export default new UsersController (
  UserService
);
