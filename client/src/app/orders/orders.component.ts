import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../share/orders.service';
import { Observable } from 'rxjs';
import { Order } from '../Model/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public dataSource: Order[];
  displayedColumns: string[] = [
    'orderId',
    'orderDate',
    'shipVia',
    'shipAddress',
  ];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.getOrders().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    });

  }
}
