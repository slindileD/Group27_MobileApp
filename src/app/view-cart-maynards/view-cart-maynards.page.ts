import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-cart-maynards',
  templateUrl: './view-cart-maynards.page.html',
  styleUrls: ['./view-cart-maynards.page.scss'],
})
export class ViewCartMaynardsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
ContinueShopping(){
  this.router.navigate(['/browse-snacks']);
}

ProceedCheckout(){
  this.router.navigate(['/checkout']);
}

EmptyCart(){
  this.router.navigate(['/empty-cart']);
}

UpdateCart(){
  this.router.navigate(['/browse-snacks']);
}

}
