import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.page.html',
  styleUrls: ['./empty-cart.page.scss'],
})
export class EmptyCartPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
ContinueShopping(){
  this.router.navigate(['/browse-snacks']);
}
}
