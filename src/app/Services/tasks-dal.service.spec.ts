import { TestBed, inject } from '@angular/core/testing';
import { TasksDalService } from './tasks-dal.service';
import{HttpClientModule, HttpErrorResponse} from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ITask, Task } from '../Model/ITask';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
describe('TasksDalService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      providers: [TasksDalService]
    });
    

  });
  it('should be created', inject([TasksDalService], (service: TasksDalService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should get tasks',
  inject(
    [HttpTestingController, TasksDalService],
    (httpMock: HttpTestingController, dataService: TasksDalService) => {
      const mockUsers:ITask[] = [
        { TaskID: 1, TaskName: 'Task1',Priority:8,ParentTaskName:'Task1Parent',StartDate:'2018-01-01',EndDate :'2018-01-01',IsCompleted:true },
      ];
      dataService.getTasks().subscribe((event: ITask[]) => {
        expect(event).toEqual(mockUsers);
      });
      const mockReq = httpMock.expectOne(environment.tasksUrl+'/GetAllTask');
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockUsers);
      httpMock.verify();
    }
  ));

  it('should get task',
  inject(
    [HttpTestingController, TasksDalService],
    (httpMock: HttpTestingController, dataService: TasksDalService) => {
      const mocktask:Task={ TaskID: 1, TaskName: 'Task1',Priority:8,ParentTaskName:'Task1Parent',StartDate:'2018-01-01',EndDate :'2018-01-01',IsCompleted:true }
      dataService.getTask(1).subscribe((event: Task) => {
        expect(event).toEqual(mocktask);
      });
      const mockReq = httpMock.expectOne(environment.tasksUrl+'/GetTaskByID/1');
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mocktask);
      httpMock.verify();
    }
  ));
  it('should save task', inject([TasksDalService], (service: TasksDalService) => {
    let task:ITask=new Task();
    task.TaskName='Task1';
    task.ParentTaskName='ParentTask1';
    task.Priority=10;
    task.StartDate='2018-01-01';
    task.EndDate='2018-01-01';
    task.IsCompleted=false;
    //const mocktask:Task={ TaskID: 0, TaskName: 'Task1',Priority:8,ParentTaskName:'Task1Parent',StartDate:'2018-01-01',EndDate :'2018-01-01',IsCompleted:true }
    //const res=service.Save(task);
    expect(service.Save(task)).toBeTruthy();
  }));
  it('should update task', inject([TasksDalService], (service: TasksDalService) => {
    let task:ITask=new Task();
    task.TaskID=1;
    task.TaskName='Task1';
    task.ParentTaskName='ParentTask1';
    task.Priority=10;
    task.StartDate='2018-01-01';
    task.EndDate='2018-01-02';
    task.IsCompleted=false;
    //const mocktask:Task={ TaskID: 0, TaskName: 'Task1',Priority:8,ParentTaskName:'Task1Parent',StartDate:'2018-01-01',EndDate :'2018-01-01',IsCompleted:true }
    //const res=service.Save(task);
    expect(service.Save(task)).toBeTruthy();
  }));
  it('should delete task', inject([TasksDalService], (service: TasksDalService) => {
    expect(service.Delete(1)).toBeTruthy();
  }));


 
  
 

  





});
