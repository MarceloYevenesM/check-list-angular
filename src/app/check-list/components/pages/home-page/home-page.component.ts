import { Component } from '@angular/core';
import { CheckListService } from '../../services/check-list.service';
import { Task } from '../../interfaces/task.interfaces';

@Component({
  selector: 'check-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private checkListService:CheckListService){}

  get missingTask(): Task[]{
    return this.checkListService.missingTask;
  }

  get tasksPerformed(): Task[]{
    return this.checkListService.tasksPerformed;
  }

}
