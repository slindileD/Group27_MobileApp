import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-water-world-water-details',
  templateUrl: './view-water-world-water-details.page.html',
  styleUrls: ['./view-water-world-water-details.page.scss'],
})
export class ViewWaterWorldWaterDetailsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
RequestCancelViewProduct(){
  this.router.navigate(['/tabs/tab3']);
}

RequestAddToCart(){
  this.router.navigate(['/add-water-world-water-to-cart']);
}
}
