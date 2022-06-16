import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  // lower/upper/title case
  lowerCaseString = `it's all in the game`;
  upperCaseString = `SHUT OUT`;

  //date pipe
  netajiBirthday = new Date('01/23/1897');

  //i18nSelect Pipe
  gender: string = 'male';
  inviteMap: any = {
    male: 'Invite him.',
    female: 'Invite her.',
    other: 'Invite them.',
  };

  //keyValue pipe
  object: { [key: number]: string } = { 2: 'foo', 1: 'bar' };
  map = new Map([
    [2, 'foo'],
    [1, 'bar'],
  ]);

  //percent pipe
  a: number = 0.259;
  b: number = 1.3495;

  ngOnInit() {}
}
