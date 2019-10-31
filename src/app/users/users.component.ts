import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
