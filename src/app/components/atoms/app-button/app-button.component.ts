import {Component, Input, OnInit} from '@angular/core';
import AppButonType from "./app-button-typeenum";

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {

  @Input() label = '';
  @Input() onClick: Function = () => {
  };
  @Input() buttonType: AppButonType = AppButonType.Default;

  constructor() {
  }

  ngOnInit(): void {
  }

}
