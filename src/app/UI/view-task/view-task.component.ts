import { Component, OnInit } from '@angular/core';
import { ITask } from '../../Model/ITask';
import { TasksDalService } from '../../Services/tasks-dal.service';
import{ITaskFilter} from '../../Shared/ITaskFilter';
import { TaskSearchService } from '../../Services/task-search.service';
import {Router} from "@angular/router";

import {formatDate } from '@angular/common';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private dal:TasksDalService , private tf:TaskSearchService, private router: Router) { }
  
public tasks:Array<ITask>=[];
public taskFilter:ITaskFilter;
public EditTask(TaskId:number):void{
  const link = '../edit/'+ TaskId;
  this.router.navigate([link]);
}
public EndTask(task:ITask):string{
 
 task.EndDate = formatDate(new Date().toUTCString(), 'MM-dd-yyyy hh:mm:ss a', 'en-US');//new Date().toLocaleDateString();//this.datepipe.transform(Date.now(), 'yyyy-mm-dd');
 this.dal.Save(task).subscribe(response => this.getTasks(), err => console.log(err));
 this.tasks = this.tasks.filter(t => t.TaskID !== task.TaskID);
 return "Task Ended Successfully";
}

public DeleteTask(taskID:number):string{
  this.dal.Delete(taskID).subscribe(response => this.router.navigate(['/']), err => console.log(err));
  this.tasks = this.tasks.filter(t => t.TaskID !== taskID);
  return "Task Deleted Successfully";
 }
  ngOnInit() { 
       this.getTasks();
       this.taskFilter = this.tf.taskFilter;
  }
  getTasks() : void{
    //this.tasks = [
      // {'TaskID':1,
      //   'TaskName': '3232',
      //   'Priority':2,
      //   'ParentTaskName':'string',
      //   'StartDate':'2018/02/11',
      //   'EndDate':''}];
      this.dal.getTasks().subscribe((data:ITask[])=>{
      this.tasks=data;
    });
  }
  
 
  

}
