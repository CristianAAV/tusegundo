import { Component, OnInit } from '@angular/core';
import { TusegundoService } from '../tusegundo.service';
import { Tusegundo } from '../tusegundo';

@Component({
  selector: 'app-tusegundo-list',
  templateUrl: './tusegundo-list.component.html',
  styleUrls: ['./tusegundo-list.component.css']
})
export class TusegundoListComponent implements OnInit {

  tusegundos : Array<Tusegundo>=[];
  tusegundos_count: any;

  constructor( private tusegundoService:TusegundoService) { }

  ngOnInit(): void {
    this.getTusegundos();
  }
  getTusegundos(): void {
    this.tusegundoService.getTusegundos().subscribe((tusegundos) => 
    {this.tusegundos = tusegundos
    this.tusegundos_count = this.tusegundos.reduce((acc: any, obj: any) => {
        if (acc[obj.marca]) {
          acc[obj.marca] += 1;
        } else {
          acc[obj.marca] = 1;
        }
        return acc;
      },{});
  });
  }
}
