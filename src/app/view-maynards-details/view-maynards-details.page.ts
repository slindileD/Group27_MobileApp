import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-maynards-details',
  templateUrl: './view-maynards-details.page.html',
  styleUrls: ['./view-maynards-details.page.scss'],
})
export class ViewMaynardsDetailsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
RequestCancelViewProduct(){
  this.router.navigate(['/tabs/tab3']);
}

RequestAddToCart(){
  this.router.navigate(['/add-maynards-to-cart']);
}
}
