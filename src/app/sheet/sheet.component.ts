import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  users;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

}
