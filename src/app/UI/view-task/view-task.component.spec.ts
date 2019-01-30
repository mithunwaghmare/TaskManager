import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';
import {SearchTaskComponent} from '../search-task/search-task.component';
import {FilterPipe} from '../../Shared/tasks.pipe';
import{FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import{RouterTestingModule} from '@angular/router/testing';
import { ITask, Task } from '../../Model/ITask';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ ViewTaskComponent, SearchTaskComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get tasks', () => {
    component.getTasks();
    expect(component.tasks.length).toBeGreaterThanOrEqual(0);
  });
  it('should end task', () => {
    let task:ITask=new Task();
    task.TaskID=1;
    task.TaskName='Task1';
    task.ParentTaskName='ParentTask1';
    task.Priority=10;
    task.StartDate='2018-01-01';
    task.EndDate='2018-01-01';
    task.IsCompleted=true;
    var res=component.EndTask(task);
    expect(res).toEqual("Task Ended Successfully");
  });
  it('should delete task', () => {
   
    var res=component.DeleteTask(1);
    expect(res).toEqual("Task Deleted Successfully");
  });
  
});
