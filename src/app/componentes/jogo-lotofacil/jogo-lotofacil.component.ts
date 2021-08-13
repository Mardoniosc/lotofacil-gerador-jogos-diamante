import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-lotofacil',
  templateUrl: './jogo-lotofacil.component.html',
  styleUrls: ['./jogo-lotofacil.component.scss']
})
export class JogoLotofacilComponent implements OnInit {
  @Input() numero: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
