import {Component, OnDestroy, OnInit} from '@angular/core';
import {faShoppingCart, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiService, UserService} from '../services';
import {LoginComponent} from '../login';

@Component({
  selector: 'user-bar-info',
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.css']
})

export class UserInfoComponent implements OnInit, OnDestroy {
  shoppingCart = faShoppingCart;
  userCircle = faUserCircle;
  visible: Boolean = false;
  status: String = 'Se connecter';

  constructor(private modalService: NgbModal, private userService: UserService, private apiService: ApiService) {
  }

  login(content) {
    const modalRef = this.modalService.open(LoginComponent, {
      centered: true,
      backdropClass: 'light-backdrop',
      windowClass: 'dark-modal',
      size: 'lg'
    });
  }

  register(content) {
    this.modalService.open(content, {
      centered: true,
      backdropClass: 'light-backdrop',
      windowClass: 'dark-modal',
      size: 'lg'
    });
  }

  ngOnInit() {
    /*this.userService.carts.subscribe(cart => {
      this.visible = !!(cart);
    }, error => {
      console.log(error);
    });
    */
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
    this.userService.removeCurrentCart();
  }
}
