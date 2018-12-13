import { ICart } from "./Interface";
import { Flat, Ecole, Materiel, Meca } from ".";

export class CartModel implements ICart {
    cartId: number;
    flats: Flat[];
    ecoles: Ecole[];
    materiels: Materiel[];
    mecas: Meca[];

  public addFlat(...flats: Flat[]) {
    if (!this.flats) {
      this.flats = [];
    }

    flats.forEach(flat => {
      this.flats.push(flat);
    });
  }

  public clear() {
      this.cartId = -1;
      this.flats = [];
      this.ecoles = [];
      this.materiels = [];
      this.mecas = [];
  }

  public notNullAndIsNotEmpty(): boolean {
    return (
      (!!this.flats && this.flats.length > 0) ||
      (!!this.materiels && this.materiels.length > 0) ||
      (!!this.mecas && this.mecas.length > 0) ||
      (!!this.ecoles && this.ecoles.length > 0));
  }

  public getTotalPrice(): number {
    let sum = 0.0;
    this.flats.forEach(flat => {
      sum += flat.prix;
    });

    return sum;
  }
}
