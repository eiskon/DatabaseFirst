import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../Model/order';
import { OrderRaw } from '../Model/order-raw';
import { OrderFactory } from '../Model/order-factory';
import { retry, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  private api = 'http://localhost:5000/api';
  private orders: any;

  constructor(private http: HttpClient) {}

  public getOrders(): Observable<Order[]> {
    return this.http.get<OrderRaw[]>(`${this.api}/orders`)
      .pipe(
        retry(3),
        map(orderRaw =>
          orderRaw.map(o => OrderFactory.fromRaw(o)),
          )
      );
  }
}
