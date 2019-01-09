import {Flat} from './flat.interface';

export interface Pack {
  id?: number;
  order?: number;
  categoryName?: string;
  flats?: Flat[];
}
