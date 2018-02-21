import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {User} from '../models/user.interface';
import {USER_LIST} from '../mocks/users';


/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubService {

  constructor() {
    console.log('Hello GithubServiceProvider Provider');
  }



}
