import { Order } from './order';
import { OrderRaw } from './order-raw';


export class OrderFactory {

  static fromRaw(o: OrderRaw): Order {
    return {
      ...o,
      OrderDate: new Date(o.OrderDate),
      RequiredDate: new Date(o.RequiredDate),
      ShippedDate: new Date(o.ShippedDate)
    };
  }
}

