import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-aquelle-details',
  templateUrl: './view-aquelle-details.page.html',
  styleUrls: ['./view-aquelle-details.page.scss'],
})
export class ViewAquelleDetailsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
RequestCancelViewProduct(){
  this.router.navigate(['/tabs/tab3']);
}

RequestAddToCart(){
  this.router.navigate(['/add-aquelle-to-cart']);
}
}
