export interface Order {
  OrderId: number;
  CustomerId: number;
  EmployeeId: number;
  OrderDate?: Date;
  RequiredDate?: Date;
  ShippedDate?: Date;
  ShipVia?: number;
  Freight: number;
  ShipName: number;
  ShipAddress: string;
  ShipCity: string;
  ShipRegion: string;
  ShipPostalCode: string;
  ShipCountry: string;
}
