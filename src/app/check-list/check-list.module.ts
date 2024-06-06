import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule
  ],exports: [
    HomePageComponent,
  ]
})
export class CheckListModule { }
