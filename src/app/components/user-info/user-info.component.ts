import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {UserModule} from '../../store/actions';
import LogOut = UserModule.LogOut;
import {selectAuthenticated$} from '../../store/selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'user-bar-info',
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public status: String;
  public userLogged$: Observable<Boolean>;
  public loggedIn: Boolean;

  constructor(
    private modalService: NgbModal,
    private store: Store<AppState>
  ) {
    this.userLogged$ = this.store.pipe(select(selectAuthenticated$));
  }

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

    this.userLogged$.subscribe(isAuthenticated => {
      this.loggedIn = isAuthenticated;
    });
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

  public logout() {
    this.store.dispatch(new LogOut());
  }

  public closeModal(value: any) {
    this.modalService.dismissAll();
  }
}
