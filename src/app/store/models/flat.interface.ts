export interface Flat {
  id?: number;
  reference?: string;
  title?: string;
  description?: string;
  nbPersons?: string;
  hasSdBWC?: boolean;
  hasPet?: boolean;
  hasWifi?: boolean;
  orientation?: string;
  startDate?: Date;
  endDate?: Date;
  prices?: number;
  images?: string[];
}
