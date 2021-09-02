import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-water-world-water-to-cart',
  templateUrl: './add-water-world-water-to-cart.page.html',
  styleUrls: ['./add-water-world-water-to-cart.page.scss'],
})
export class AddWaterWorldWaterToCartPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
GoToViewCart(){
  this.router.navigate(['/view-cart-water-world-water']);
}

ContinueShopping(){
  this.router.navigate(['/browse-water']);
}
}
