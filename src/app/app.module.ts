import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {ToolbarComponent} from './toolbar/toolbar.component';
import { UsersComponent } from './users/users.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import {SheetComponent} from './sheet/sheet.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    BottomSheetComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  entryComponents: [SheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
