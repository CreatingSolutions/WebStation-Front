import { Flat } from './Flat';
import { Ecole } from './Ecole';
import { Materiel } from './Materiel';
import { Meca } from './Meca';

export interface Cart {
    cartId: number;
    flats: Flat[];
    ecoles: Ecole[];
    materiels: Materiel[];
    mecas: Meca[];
}
