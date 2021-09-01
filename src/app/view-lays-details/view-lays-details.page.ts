import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-lays-details',
  templateUrl: './view-lays-details.page.html',
  styleUrls: ['./view-lays-details.page.scss'],
})
export class ViewLaysDetailsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
RequestCancelViewProduct(){
  this.router.navigate(['/tabs/tab1']);
}

RequestAddToCart(){
  this.router.navigate(['/add-to-lays-cart']);
}


}
