import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  logo = 'assets/images/rcc_logo.png';
  constructor() { }

  ngOnInit() {
  }

}
