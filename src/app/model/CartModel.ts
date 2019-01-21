import { Flat } from '.';

export class CartModel {
  userId: number;
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

    localStorage.setItem('cart', JSON.stringify(this));
  }

  public clear() {
    this.userId = -1;
    this.flats = [];
    localStorage.removeItem('cart');
  }

  public getTotalPrice(): number {
    let sum = 0.0;
    this.flats.forEach(flat => {
      sum += 90;
    });

    return sum;
  }
}
