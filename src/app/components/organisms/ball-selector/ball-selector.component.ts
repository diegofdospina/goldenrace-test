import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  options: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @Input() onBallSelectedListener: Function = (ballValue: Number) => {
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
