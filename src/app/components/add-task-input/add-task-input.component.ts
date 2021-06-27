import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-input',
  templateUrl: './add-task-input.component.html',
  styleUrls: ['./add-task-input.component.css']
})
export class AddTaskInputComponent implements OnInit {

  task:string = ''
  @Output() EvEmitter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    //document.getElementById()
  }

  emit(taskTitle:string){
    this.EvEmitter.emit(taskTitle)
  }

}
