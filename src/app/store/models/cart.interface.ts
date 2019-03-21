export interface Cart {
  cartId: number;
  userId: number;
  flats: any[];
  stuffs: any[];
  lifts: any[];
  validate: boolean;
  paid: boolean;
  totalFlatPrice: number;
  totalLiftPrice: number;
  totalStuffPrice: number;
  totalPrice: number;
}
