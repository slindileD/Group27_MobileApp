import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-cart-water-world-water',
  templateUrl: './view-cart-water-world-water.page.html',
  styleUrls: ['./view-cart-water-world-water.page.scss'],
})
export class ViewCartWaterWorldWaterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
ContinueShopping(){
  this.router.navigate(['/browse-water']);
}

ProceedCheckout(){
  this.router.navigate(['/checkout']);
}

EmptyCart(){
  this.router.navigate(['/empty-cart']);
}

UpdateCart(){
  this.router.navigate(['/browse-water']);
}
}
