import { ITask, Task } from "../../Model/ITask";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksDalService } from "../../Services/tasks-dal.service";

import { Route } from "../../../../node_modules/@angular/compiler/src/core";
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  @Input() task: ITask;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  buttonCaption:string;

  AddUpdate() {
  this.taskService.Save(this.task).subscribe(response => this.Cancel(), err => console.log(err));
   return "Task Added successfully";
  }

  Cancel() {
    
    if(this.navigated =true)
    {
      const url = '/view';
      this.router.navigate([url]);
    }
    else{
      const url = '/view';
      this.router.navigate([url]);
    }   
  }
  constructor(private taskService: TasksDalService,
    private route: ActivatedRoute, private router : Router) {
      this.task = new Task();
     }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.buttonCaption = "Update";
        this.taskService.getTask(id).subscribe(task => 
        {
          this.task = task;
        },err => console.log(err))
      } else {
        this.navigated = false;
        this.buttonCaption = "Add";
      }
    });
  }


}
