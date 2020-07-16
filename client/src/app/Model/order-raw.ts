export interface OrderRaw {
  OrderId: number;
  CustomerId: number;
  EmployeeId: number;
  OrderDate?: string;
  RequiredDate?: string;
  ShippedDate?: string;
  ShipVia?: number;
  Freight: number;
  ShipName: number;
  ShipAddress: string;
  ShipCity: string;
  ShipRegion: string;
  ShipPostalCode: string;
  ShipCountry: string;
}
