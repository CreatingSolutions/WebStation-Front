import { Materiel, Meca, Ecole, Flat } from '..';

export interface ICart {
  cartId: number;
  flats: Flat[];
  ecoles: Ecole[];
  materiels: Materiel[];
  mecas: Meca[];

  addFlat(...flats: Flat[]): void;
  clear(): void;
  notNullAndIsNotEmpty(): boolean;
  getTotalPrice(): number;
}
