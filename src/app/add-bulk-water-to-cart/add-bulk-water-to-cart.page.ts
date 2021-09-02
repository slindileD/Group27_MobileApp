import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-bulk-water-to-cart',
  templateUrl: './add-bulk-water-to-cart.page.html',
  styleUrls: ['./add-bulk-water-to-cart.page.scss'],
})
export class AddBulkWaterToCartPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
GoToViewCart(){
  this.router.navigate(['/view-cart-bulk-water']);
}

ContinueShopping(){
  this.router.navigate(['/browse-snacks']);
}
}
