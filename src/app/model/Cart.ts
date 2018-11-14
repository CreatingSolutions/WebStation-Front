import { Logement } from './Logement';
import { Ecole } from './Ecole';
import { Materiel } from './Materiel';
import { User } from './User';
import { Meca } from './Meca';

export interface Cart {
    cartId: number;
    logements: Logement[];
    ecoles: Ecole[];
    materiels: Materiel[];
    mecas: Meca[];
    user: User;
}
