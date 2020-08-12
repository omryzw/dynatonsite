import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  $userDetails: Object;
  user = '';
  unselectederror = false;

  getUserInfo() { 
    if (this.user == '-1' || this.user == '') {
      this.unselectederror = true;
    } else {
      this.unselectederror = false;

      this.data.getUserInfo(this.user)
        .subscribe(data => this.$userDetails = data['data']);
    }
    
  }

 
}