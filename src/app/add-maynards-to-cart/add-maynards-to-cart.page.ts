import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-maynards-to-cart',
  templateUrl: './add-maynards-to-cart.page.html',
  styleUrls: ['./add-maynards-to-cart.page.scss'],
})
export class AddMaynardsToCartPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

GoToViewCart(){
  this.router.navigate(['/view-cart-maynards']);
}

ContinueShopping(){
  this.router.navigate(['/browse-snacks']);
}
}
