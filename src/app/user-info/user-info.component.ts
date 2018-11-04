import { Component } from "@angular/core";
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'user-bar-info',
    templateUrl: 'user-info.component.html',
    styleUrls: ['user-info.component.css']
})

export class UserInfoComponent {
    shoppingCart = faShoppingCart
    userCircle = faUserCircle

    constructor(private modalService: NgbModal) {}

    login(content) {
        this.modalService.open(content, { 
            centered: true,
            backdropClass: 'light-backdrop',
            windowClass: 'dark-modal',
            size: 'lg'
        });
    }
}