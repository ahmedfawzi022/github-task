import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ReposService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }
  getRepos(value,type,lang): Observable<any> {
    return this.http.get(`${this.BASE_URL}/search/repositories?q=${value}&type=${type}&language=${lang}`);
  }
}
