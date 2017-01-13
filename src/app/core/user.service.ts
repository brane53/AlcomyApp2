import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _id: string = '';
  private _userName: string = '';

  constructor() { }

  get id(){
    return this._id;
  }
  get userName(){
    return this._userName;
  }

}
