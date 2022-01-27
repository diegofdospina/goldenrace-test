import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() size: String = "m";
  className: String = "logo";
  logoName: String = "Golden Race"

  constructor() { }

  ngOnInit(): void {
    this.className = `logo ${this.size}`;
  }

}
