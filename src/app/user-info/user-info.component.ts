import { Component } from "@angular/core";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'user-bar-info',
    templateUrl: 'user-info.component.html',
    styleUrls: ['user-info.component.css']
})

export class UserInfoComponent {
    faShippingCart = faShoppingCart
}