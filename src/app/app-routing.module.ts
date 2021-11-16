import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ContentComponent } from './components/content/content.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { NoRecordFoundComponent } from './components/no-record-found/no-record-found.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  {
    path: '',
    // canLoad: [CanLoadGuard],
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
},
{
  path: '',
 // canActivate: [AuthGuard],
  component: ContentComponent,
  children: [
      {
          path: 'add-student',
         // canActivateChild: [AuthGuard],
          component: AddStudentComponent,
      },
      {
          path: 'edit-student/:id',
          // canLoad: [CanLoadGuard],
          component: EditStudentComponent,
      },
      {
          path: 'students-list',
        //  canActivateChild: [AuthGuard],
          component: StudentsListComponent,
      }
  ],
},
{ path: '**', component: NoRecordFoundComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
