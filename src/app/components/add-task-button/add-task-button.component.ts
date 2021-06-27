import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task-button',
  templateUrl: './add-task-button.component.html',
  styleUrls: ['./add-task-button.component.css']
})
export class AddTaskButtonComponent implements OnInit {

  //em = new EventEmitter()
  @Input() addTaskToList:any

  constructor() { }

  ngOnInit(): void {
  }

}
