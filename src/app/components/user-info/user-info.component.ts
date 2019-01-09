import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {UserModule} from '../../store/actions';
import LogOut = UserModule.LogOut;
import {selectAuthenticated$, selectUsersLogs$} from '../../store/selectors';
import {Observable} from 'rxjs';
import {AlertService} from '../../services';

@Component({
  selector: 'user-bar-info',
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public status: String;
  public userLogged$: Observable<Boolean>;
  public loggedIn: Boolean;
  public userLogs$: Observable<any>;

  constructor(
    private modalService: NgbModal,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {
    this.userLogged$ = this.store.pipe(select(selectAuthenticated$));
    this.userLogs$ = this.store.pipe(select(selectUsersLogs$));
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

      if (isAuthenticated) {
        this.modalService.dismissAll();
      }
    });

    this.userLogs$.subscribe(logs => {
      if (logs) {
        if (logs.type === 'ERROR') {
          this.alertService.error(logs.message);
        } else if (logs.type === 'SUCCESS') {
          this.alertService.success(logs.message);
        }
      }
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
