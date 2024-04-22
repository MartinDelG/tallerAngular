import { Component, OnInit } from '@angular/core';
import {Serie} from '../serie'
import { SerieService } from '../serie.service';
@Component({
  selector: 'app-serie-table',
  templateUrl: './serie-table.component.html',
  styleUrls: ['./serie-table.component.css']
})
export class SerieTableComponent implements OnInit {
series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSeries(): void{
  this.serieService.getSeries().subscribe((series) => {
    this.series = series;
  })
}


  ngOnInit() {
    this.getSeries();
  }

}
