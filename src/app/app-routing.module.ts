import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UpdateTaskComponent} from './UI/update-task/update-task.component';
import {ViewTaskComponent} from './UI/view-task/view-task.component';

const routes: Routes = [
{path: 'add', component: UpdateTaskComponent  },
{path: 'edit/:id', component: UpdateTaskComponent  },
{path: 'view', component: ViewTaskComponent},
{path: '', component: ViewTaskComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
