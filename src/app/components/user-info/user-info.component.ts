import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {UserModule} from '../../store/actions';
import LogOut = UserModule.LogOut;

@Component({
  selector: 'user-bar-info',
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  status: String;

  constructor(
    private modalService: NgbModal,
    private store: Store<AppState>
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
    /*const cart = this.userService.getCart();
    if (!!cart) {
      if (!cart.flats) {
        cart.flats = [];
      } else {
        return (!!cart.flats && cart.flats.length > 0);
      }
    }*/
    return true;
  }

  public loggedIn(): boolean {
    return false;
  }

  public logout() {
    this.store.dispatch(new LogOut());
  }

  public closeModal(value: any) {
    this.modalService.dismissAll();
  }

  ngOnDestroy(): void {

  }
}
