import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interfaces';

@Injectable({ providedIn: 'root' })
export class CheckListService {

  /* Privado para evitar modificarlo en otro servicio o lugar que se use */
  private tasks: Task[] = [];

  constructor() { }

  saveTask(task: Task): void {
    this.tasks.unshift(task);
  }

  /*  get missingTask */
  get missingTask(): Task[] {
    return this.tasks.filter((task) => task.state)
  }


  get tasksPerformed(): Task[] {
    return this.tasks.filter((task) => !task.state)
  }


}
