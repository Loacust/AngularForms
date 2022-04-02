import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksServiceService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks!:Task[];
  constructor(private taskService:TasksServiceService) { 
    taskService.getTask().subscribe((results) =>{
      this.tasks= results;
    }, (err) => {
      console.log (err)
    });
  }

  ngOnInit(): void {
  }

}
