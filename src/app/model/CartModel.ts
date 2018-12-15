import { ICart } from './Interface';
import { Flat } from '.';

export class CartModel implements ICart {
  cartId: number;
  flats: Flat[];

  public addFlat(...flats: Flat[]) {
    if (!this.flats) {
      this.flats = [];
    }

    flats.forEach(flat => {
      if (!this.flats.includes(flat)) {
        this.flats.push(flat);
      }
    });
  }

  public clear() {
    this.cartId = -1;
    this.flats = [];
  }

  public notNullAndIsNotEmpty(): boolean {
    if (!this.flats) {
      return false;
    }
    return (!!this.flats && this.flats.length > 0);
  }

  public getTotalPrice(): number {
    let sum = 0.0;
    this.flats.forEach(flat => {
      sum += 90;
    });

    return sum;
  }
}
