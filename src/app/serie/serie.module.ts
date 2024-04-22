import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SerieTableComponent} from './serie-table/serie-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SerieTableComponent],
  declarations: [SerieTableComponent]
})
export class SerieModule { }
