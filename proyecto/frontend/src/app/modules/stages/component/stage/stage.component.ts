import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrl: './stage.component.scss'
})
export class StageComponent {
  @Input("title") public title: string = "";
  @Input("average") public average: number = 0;
  @Input("id") public id: number = 0;

  constructor() {}
}