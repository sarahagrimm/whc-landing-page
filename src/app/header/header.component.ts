import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  phoneImage: string = 'https://blackrockdigital.github.io/startbootstrap-new-age/device-mockups/iphone_6_plus/iphone_6_plus_white_port.png';

  constructor() { }

  ngOnInit() {
  }

}
