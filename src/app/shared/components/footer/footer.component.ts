import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class='text-center'>
    <hr>
    <app-menu>
    <li class="nav-item">
        <a class="nav-link" href="#">Back to Top</a>
    </li>
    </app-menu>
      <p class="redText">Copyright 2020 | Piyush</p>
  </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
