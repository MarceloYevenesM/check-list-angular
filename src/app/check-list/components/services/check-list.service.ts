import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interfaces';

@Injectable({providedIn: 'root'})
export class CheckListService {

  /* Privado para evitar modificarlo en otro servicio o lugar que se use */
  public missingTask: Task[] = [];

  constructor() { }

  saveTask(task: Task){
    this.missingTask.unshift(task);
    console.log(this.missingTask)
  }



}
