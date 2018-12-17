import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ApiService, LoadingService, UserService} from '../../services';

@Component({
  selector: 'user-bar-info',
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  status: String;

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private apiService: ApiService,
    private loader: LoadingService
  ) {}

  public login(content) {
    this.modalService.open(content, {
      centered: true,
      backdropClass: 'light-backdrop',
      windowClass: 'dark-modal',
      size: 'lg'
    });
  }

  ngOnInit() {
    this.status = 'Se connecter';
  }

  public hasCart(): boolean {
    const cart = this.userService.getCart();
    if (!!cart) {
      if (!cart.flats) {
        cart.flats = [];
      } else {
        return (!!cart.flats && cart.flats.length > 0);
      }
    }
    return true;
  }

  public logout() {
    this.apiService.logout().subscribe(res => {
      this.loader.hide();
      if (res.ok) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }, error => {
      console.log(error);
      this.loader.hide();
    });
  }

  public closeModal(value: any) {
    this.modalService.dismissAll();
  }

  public loggedIn(): boolean {
    return !!this.userService.userLoggedIn();
  }

  ngOnDestroy(): void {
    this.userService.getCart().clear();
  }
}
