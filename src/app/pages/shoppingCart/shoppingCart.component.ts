import { Component, OnInit } from '@angular/core';
import {
  ApiService,
  MockService,
  LoadingService,
  UserService
} from '../../services';
import { ICart } from '../../model/Interface';
import { Ecole, Flat, Materiel, Meca } from '../../model';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'shopping',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ICart;
  noCartsMessage: string;
  isLinear = true;
  flatDisabled = false;

  constructor(
    private api: ApiService,
    private mock: MockService,
    private loading: LoadingService,
    private userService: UserService
  ) {
    this.noCartsMessage = 'Votre panier est vide';
  }

  ngOnInit(): void {
    this.shoppingCart = this.userService.getCart();
  }

  public clear(value: string = '') {
    if (value === 'flats') {
    } else if (value === '') {
    }
  }

  public shoppingCartExist() {
    return this.shoppingCart && this.shoppingCart.notNullAndIsNotEmpty();
  }

  public update(value: any) {
    this.flatDisabled = value.source.selectedOptions.selected.length > 0;
  }
}
