import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc-string',
  templateUrl: './abc-string.component.html',
  styleUrls: ['./abc-string.component.scss']
})
export class AbcStringComponent implements OnInit {
  abc='A B C';
  constructor() { }

  ngOnInit(): void {
  }

}
