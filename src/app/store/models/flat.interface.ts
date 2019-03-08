export interface Flat {
  flatId?: number;
  title?: string;
  description?: string;
  nbPersonsMin?: number;
  nbPersonsMax?: number;
  SdBWC?: boolean;
  orientation?: string;
  saison?: string;
  startDate?: Date;
  endDate?: Date;
  prices?: number;
  images?: string[];
}
