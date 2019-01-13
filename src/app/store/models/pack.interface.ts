import {Flat} from './flat.interface';

export interface Pack {
  id?: number;
  title?: string;
  description?: string;
  images?: string[];
  categoryName?: string;
  order?: number;
  flat?: Flat;
}
