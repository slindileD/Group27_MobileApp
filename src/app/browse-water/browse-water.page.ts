import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-browse-water',
  templateUrl: './browse-water.page.html',
  styleUrls: ['./browse-water.page.scss'],
})
export class BrowseWaterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

ViewAquelleDetails(){
  this.router.navigate(['/view-aquelle-details']);
}

ViewWaterWorldWaterDetails(){
  this.router.navigate(['/view-water-world-water-details']);
}
ViewBulkWaterDetails(){
  this.router.navigate(['/view-bulk-water-details']);
}

BackToHome(){
  this.router.navigate(['/tabs/tab3']);
}
}
