import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ComponentAComponent implements OnInit {

  @Input() 
  public variable: any;

  constructor() { }

  ngOnInit() {
  }

}
