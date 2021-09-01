import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-browse-snacks',
  templateUrl: './browse-snacks.page.html',
  styleUrls: ['./browse-snacks.page.scss'],
})
export class BrowseSnacksPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
ViewSimbaDetails(){
  this.router.navigate(['/view-simba-details']);
}

ViewMaynardsDetails(){
  this.router.navigate(['/view-maynards-details']);
}
ViewLaysDetails(){
  this.router.navigate(['/view-lays-details']);
}

BackToHome(){
  this.router.navigate(['/tabs/tab3']);
}
}
