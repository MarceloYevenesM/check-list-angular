import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task.interfaces';

@Component({
  selector: 'check-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input()
  public tasks: Task[] = [];
}

