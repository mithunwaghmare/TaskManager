import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ITask, Task } from '../Model/ITask';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TasksDalService {

  constructor(private http:HttpClient) { }
  public getTasks()
  {
    
    return this.http.get<ITask[]>(environment.tasksUrl+'/GetAllTask')
    .pipe(map(data => 
      {
         return data;
      }
     
      ), catchError(this.handleError));
  }
  public getTask(TaskId:number):Observable<ITask>
  {
    return this.http.get<ITask>(environment.tasksUrl+'/GetTaskByID/'+TaskId)
    .pipe(map(data => 
      {
         return data;
      }
     
      ), catchError(this.handleError));
  }

public Delete(TaskId:number)
{
  
  return this.http
    .delete(environment.tasksUrl+'/DeleteTask/'+TaskId)
    .pipe(catchError(this.handleError));
}

 public Save(task:Task)
 {
   if(task.TaskID)
   {
      return this.Put(task);
   }
   else{
     return this.Post(task);
   }
 }
 private Put(task:Task)
 {
  const httpOptions = {
    headers : new HttpHeaders({
     'Content-Type': 'application/json'
   })
 };

 var body = JSON.stringify(task);
  return this.http
    .post(environment.tasksUrl+'/UpdateTask', body, httpOptions)
    .pipe(catchError(this.handleError));
 }
 // Add New Task
 private Post(task:Task)
 {
   const httpOptions = {
   headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  var body = JSON.stringify(task);
  
  return this.http
    .post(environment.tasksUrl+'/SaveTask', body,httpOptions)
    .pipe(catchError(this.handleError));
 }
  private handleError(res: HttpErrorResponse | any) {
    
    return observableThrowError(res.error || 'Server error');
  }

}
