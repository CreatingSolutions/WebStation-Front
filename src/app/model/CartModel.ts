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
}
