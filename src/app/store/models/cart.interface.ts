import {Flat, Lift, Stuff} from '.';

export interface Cart {
  id?: number;
  flats?: Flat[];
  stuffs?: Stuff[];
  lifts?: Lift[];
}
