import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday1',
  template: `
    <p>Hero birthday is {{ heroBirthDay | date }}</p>
  `
})
export class HeroBirthday1Component implements OnInit {

  constructor() { }
  heroBirthDay = new Date(1997,10,8);
  ngOnInit() {

  }

}