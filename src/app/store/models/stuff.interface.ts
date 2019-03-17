export interface Stuff {
  stuffId: number;
  title: string;
  store: string;
  img: string;
  prices: number,
  cosiness: Characteristic;
  security: Characteristic;
  quality: Characteristic;
  performance: Characteristic;
}

export interface Characteristic {
  label: string;
  note: string;
}
