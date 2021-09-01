import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-simba-to-cart',
  templateUrl: './add-simba-to-cart.page.html',
  styleUrls: ['./add-simba-to-cart.page.scss'],
})
export class AddSimbaToCartPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
GoToViewCart(){
  this.router.navigate(['/view-cart-simba']);
}

ContinueShopping(){
  this.router.navigate(['/browse-snacks']);
}

}
