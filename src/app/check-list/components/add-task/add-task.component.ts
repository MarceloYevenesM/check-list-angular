import { Component } from '@angular/core';
import { CheckListService } from '../services/check-list.service';
import { Task } from '../interfaces/task.interfaces';

@Component({
  selector: 'check-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(private checkListService: CheckListService) { }

  addTask(valueTask: string): void {
    const task: Task = {
      name: valueTask,
      state: true,
    }

    this.checkListService.saveTask(task)
  }


}
