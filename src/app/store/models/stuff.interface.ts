export interface Stuff {
  stuffId: number;
  title: string;
  store: string;
  img: string;
  qualities: Quality[];
}

export interface Quality {
  label: string;
  note: string;
}
