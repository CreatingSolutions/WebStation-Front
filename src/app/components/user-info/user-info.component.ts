import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService, UserService } from '../../services';

@Component({
  selector: 'user-bar-info',
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  public status: String;

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private apiService: ApiService
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

  public hasCart(): Boolean {
    return !this.userService.getCart().notNullAndIsNotEmpty();
  }

  public logout() {
    this.apiService.logout().subscribe(res => {
      if (res.ok) {
        this.userService.setUser(null);
        localStorage.removeItem('token');
      }
    });
  }

  public closeModal(value: any) {
    this.modalService.dismissAll();
  }

  public loggedIn(): boolean {
    return !!this.getToken();
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  ngOnDestroy(): void {
    this.userService.getCart().clear();
  }
}
