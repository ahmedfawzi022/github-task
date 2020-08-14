import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  BASE_URL:string;
  constructor() { 
    this.BASE_URL = environment.API_URL;
  }
}
