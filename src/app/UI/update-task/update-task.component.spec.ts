import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { UpdateTaskComponent } from './update-task.component';
import{HttpClientModule} from '@angular/common/http';
import{ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
//import{DynamicTestModule} from 

describe('UpdateTaskComponent', () => {
  let component: UpdateTaskComponent;
  let fixture: ComponentFixture<UpdateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ UpdateTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add task', () => {
    component.task.TaskName='Task1';
    component.task.ParentTaskName='ParentTask1';
    component.task.Priority=10;
    component.task.StartDate='2018-01-01';
    component.task.EndDate='2018-01-01';
    component.task.IsCompleted=false;
    var res=component.AddUpdate();
    expect(res).toEqual("Task Added successfully");

    
  });
});
