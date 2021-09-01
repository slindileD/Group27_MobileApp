import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-simba-details',
  templateUrl: './view-simba-details.page.html',
  styleUrls: ['./view-simba-details.page.scss'],
})
export class ViewSimbaDetailsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
RequestCancelViewProduct(){
  this.router.navigate(['/tabs/tab1']);
}

RequestAddToCart(){
  this.router.navigate(['/add-simba-to-cart']);
}

}
