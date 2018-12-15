import { Component, OnInit } from '@angular/core';
import {
  AlertService,
  ApiService,
  LoadingService,
  UserService
} from '../../services';
import { ICart } from '../../model/Interface';
import {Router} from '@angular/router';

@Component({
  selector: 'shopping',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart: ICart;
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
  }

  ngOnInit(): void {
    this.shoppingCart = this.userService.getCart();
  }

  public clear(value: string = '') {
    if (value === 'flats') {
      this.shoppingCart.clear();
    } else if (value === '') {
      this.shoppingCart.clear();
    }
  }

  public shoppingCartExist() {
    return this.shoppingCart && this.shoppingCart.notNullAndIsNotEmpty();
  }

  public update(value: any) {
    this.flatDisabled = value.source.selectedOptions.selected.length > 0;
  }

  public validateCart() {
    if (localStorage.getItem('user')) {
      this.apiService.sendCartWith(this.userService.getUser().id, this.userService.getCart().flats).subscribe(res => {
        console.log(res);
        if (res.ok) {
          this.addCart();
        }
      }, error =>  {
        this.error(error);
      });
    } else {
      this.router.navigate(['/']);
      this.alertService.error('Vous n\'etes pas connecté');
    }
  }

  public addCart() {
    this.alertService.success('Votre panier a bien été enregistré', true);
    this.router.navigate(['/payment']);
  }

  public error(error) {
    this.loader.hide();
    this.alertService.error(error);
  }
}
