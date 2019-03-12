export interface Lift {
    description?: string;
    normal?: Forfait[];
    diamant?: Forfait[];
    unitaire?: Forfait;
    groupe?: Forfait;
}

export interface Forfait {
    id?: number;
    label?: string;
    prices?: number;
}
