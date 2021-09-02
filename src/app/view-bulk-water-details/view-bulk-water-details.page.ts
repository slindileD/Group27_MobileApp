import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-bulk-water-details',
  templateUrl: './view-bulk-water-details.page.html',
  styleUrls: ['./view-bulk-water-details.page.scss'],
})
export class ViewBulkWaterDetailsPage implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
  }
RequestCancelViewProduct(){
  this.router.navigate(['/tabs/tab3']);
}

RequestAddToCart(){
  this.router.navigate(['/add-bulk-water-to-cart']);
}
}
