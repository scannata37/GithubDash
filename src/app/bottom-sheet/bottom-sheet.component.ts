import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { SheetComponent } from '../sheet/sheet.component';
import { UsersComponent } from '../users/users.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) {

   }
  openBottomSheet() {
    this.bottomSheet.open(SheetComponent);
  }

  ngOnInit() {
  }

}
