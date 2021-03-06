import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from './shared/api.service';
import { ContentComponent } from './components/content/content.component';
import { NoRecordFoundComponent } from './components/no-record-found/no-record-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent,
    ContentComponent,
    NoRecordFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
