import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-cart-simba',
  templateUrl: './view-cart-simba.page.html',
  styleUrls: ['./view-cart-simba.page.scss'],
})
export class ViewCartSimbaPage implements OnInit {

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
