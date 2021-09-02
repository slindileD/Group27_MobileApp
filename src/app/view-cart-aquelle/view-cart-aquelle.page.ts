import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-cart-aquelle',
  templateUrl: './view-cart-aquelle.page.html',
  styleUrls: ['./view-cart-aquelle.page.scss'],
})
export class ViewCartAquellePage implements OnInit {

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
