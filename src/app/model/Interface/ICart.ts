import { Flat } from '..';

export interface ICart {
  cartId: number;
  flats: Flat[];

  addFlat(...flats: Flat[]): void;
  clear(): void;
  notNullAndIsNotEmpty(): boolean;
  getTotalPrice(): number;
}
