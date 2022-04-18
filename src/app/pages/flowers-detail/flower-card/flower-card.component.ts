import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.scss']
})
export class FlowerCardComponent implements OnInit {
  @Input() flower: any;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

}
