import { Component, ElementRef, ViewChild } from '@angular/core';
import { CheckListService } from '../services/check-list.service';
import { Task } from '../interfaces/task.interfaces';

@Component({
  selector: 'check-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(private checkListService: CheckListService) { }

  @ViewChild('txtTaskInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  addTask(): void {
    const newTask = this.tagInput.nativeElement.value;
    const task: Task = {
      name: newTask,
      state: true,
    }

    this.checkListService.saveTask(task)
  }


}
