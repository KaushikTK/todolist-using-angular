import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  heading = `TASK APP`
  tasks = [
    {
      task: 'Learn Angular',
    },
    {
      task: 'Learn React',
    },
    {
      task: 'Learn Vue',
    }
  ]

  AddItem = (task:any)=>{
    this.tasks.push(task)
  }

}
