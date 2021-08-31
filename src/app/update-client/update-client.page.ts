import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.page.html',
  styleUrls: ['./update-client.page.scss'],
})
export class UpdateClientPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

RequestCancelProfile(){
  this.router.navigate(['/tabs/tab3']);
}

RequestSaveUpdatedClient(){
  this.router.navigate(['/tabs/tab3']);
}
}
