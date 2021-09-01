import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-cart-lays',
  templateUrl: './view-cart-lays.page.html',
  styleUrls: ['./view-cart-lays.page.scss'],
})
export class ViewCartLaysPage implements OnInit {

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
