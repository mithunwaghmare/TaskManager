import { iterateListLike } from "../../../node_modules/@angular/core/src/change_detection/change_detection_util";

export interface ITask{
    TaskID:number;
    TaskName: string;
    Priority:number;
    ParentTaskName:string;
    StartDate:string;
    EndDate:string;
   
}
export class Task implements ITask
{
    TaskID:number;
    TaskName: string;
    Priority:number;
    ParentTaskName:string;
    StartDate:string;
    EndDate:string;
    
}