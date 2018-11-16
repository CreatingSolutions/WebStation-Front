import { Component, OnInit } from '@angular/core';
import { Cart } from '../model';
import { ApiService, MockService, LoadingService } from '../services';

@Component({
    selector: 'shopping',
    templateUrl: './shoppingCart.component.html'
})
export class ShoppingCartComponent implements OnInit {
    shoppingCarts: Cart[];
    noCartsMessage: string;

    constructor(private api: ApiService, private mock: MockService, private loading: LoadingService) {
        this.noCartsMessage = 'Votre panier est vide';
    }

    ngOnInit(): void {
        this.getShoppingCarts();
    }

    getShoppingCarts() {
    }
}
