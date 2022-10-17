import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, VirtualTimeScheduler } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 
import { itemsRepository } from './itemsRepository';
 
@Injectable({
    providedIn:'root'
})
export class ItemsService {
 
  baseURL: string = "http://167.99.19.186:8000";
 
  constructor(private http: HttpClient) {
  }
 
  getItems(): Observable<any> {
    return this.http.get(this.baseURL)
  }
  addItem(items: any): Observable<any> {
    return this.http.post(this.baseURL, {
        title: items.item,
        amount: items.amount,
        month: items.month
    })
  }

  deleteItem(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, {
        
    })
  }
 
}