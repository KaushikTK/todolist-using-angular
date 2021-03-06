import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task:string = '';
  @Input() num:number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}
