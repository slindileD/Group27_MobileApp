import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-to-lays-cart',
  templateUrl: './add-to-lays-cart.page.html',
  styleUrls: ['./add-to-lays-cart.page.scss'],
})
export class AddToLaysCartPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
GoToViewCart(){
  this.router.navigate(['/view-cart-lays']);
}

ContinueShopping(){
  this.router.navigate(['/browse-snacks']);
}
}
