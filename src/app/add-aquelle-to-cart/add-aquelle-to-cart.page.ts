import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-aquelle-to-cart',
  templateUrl: './add-aquelle-to-cart.page.html',
  styleUrls: ['./add-aquelle-to-cart.page.scss'],
})
export class AddAquelleToCartPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

GoToViewCart(){
  this.router.navigate(['/view-cart-aquelle']);
}

GoBackHome(){
  this.router.navigate(['/browse-water']);
}
}
