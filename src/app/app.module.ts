import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';

import { TooltipListViewComponent } from './tooltip/tooltip-list-view/tooltip-list-view.component';
import { TooltipComponent } from './tooltip/tooltip/tooltip.component';

@NgModule({
  declarations: [AppComponent, TooltipListViewComponent, TooltipComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
