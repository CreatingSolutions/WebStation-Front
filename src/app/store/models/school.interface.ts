export interface School {
    packId: number;
    period: Period;
    tickets: any;
    price: number;
    available: boolean;
}

export interface Period {
  periodId: number;
  startDate: Date;
  endDate: Date;
}
