import { Component, OnInit } from '@angular/core';
import {
  AlertService,
  ApiService,
  LoadingService,
  UserService
} from '../../services';
import {Router} from '@angular/router';
import {CartModel} from '../../model';

@Component({
  selector: 'shopping',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart: CartModel;
  public noCartsMessage: string;
  public flatDisabled = false;

  constructor(
    private apiService: ApiService,
    private loader: LoadingService,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.noCartsMessage = 'Votre panier est vide';
    this.shoppingCart = new CartModel();
  }

  ngOnInit(): void {
    const user = this.userService.getUser();
    this.apiService.getCartOf(user.id).subscribe((res: any) => {
      console.log(res);
      if (res && res.flats) {
        this.shoppingCart = <CartModel>res;
        localStorage.setItem('cart', JSON.stringify(<CartModel>res));
      }
    }, error => {
      console.log(error);
    });
  }

  public clear(value: string = '') {
    if (value === 'flats') {
      this.shoppingCart.clear();
    } else if (value === '') {
      this.shoppingCart.clear();
    }
  }

  public update(value: any) {
    this.flatDisabled = value.source.selectedOptions.selected.length > 0;
  }

  public validateCart() {
    const user = localStorage.getItem('user');
    if (user) {
      this.alertService.success('Votre panier a bien été enregistré', true);
      this.router.navigate(['/payment']);
    } else {
      this.router.navigate(['/']);
      this.alertService.error('Vous n\'etes pas connecté');
    }
  }

  public error(error) {
    this.loader.hide();
    this.alertService.error(error);
  }
}
