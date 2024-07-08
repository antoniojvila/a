import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrl: './unit.component.scss'
})
export class UnitComponent {
  @Input("title") public title: string = "";
  @Input("unit") public unit: string = "";
  @Input("lesson") public lesson: number = 0;

  constructor() {}
}
