import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task:string = ''
  @Output() AddItemEventEmitter = new EventEmitter()

  addTaskToList = ()=>{

    if(!this.task) return // return if the task field is empty

    const DATA = {
      task: this.task,
    }

    this.AddItemEventEmitter.emit(DATA)
  }

  updateTask = (e:string)=>this.task = e

  constructor() { }

  ngOnInit(): void {
  }

}
