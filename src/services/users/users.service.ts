import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {


  constructor(private http: HttpClient) {
    super();
  }
  getUser(userName): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${userName}`);
  }
}
