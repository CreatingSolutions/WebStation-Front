import {Component, OnDestroy, OnInit} from '@angular/core';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ApiService, UserService} from '../../services';

@Component({
    selector: 'user-bar-info',
    templateUrl: 'user-info.component.html',
    styleUrls: ['user-info.component.css']
})

export class UserInfoComponent implements OnInit, OnDestroy {
    shoppingCart = faShoppingCart;
    userCircle = faUserCircle;
    status: String;

    constructor(private modalService: NgbModal, private userService: UserService, private apiService: ApiService) {}

    login(content) {
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

    public hasCart(): Boolean  {
      return !this.userService.getCart().notNullAndIsNotEmpty();
    }

    logout() {
      this.apiService.logout().subscribe(res => {
        if (res.ok) {
          this.userService.setUser(null);
          localStorage.removeItem('token');
        }
      });
    }

  ngOnDestroy(): void {
      this.userService.getCart().clear();
  }
}
