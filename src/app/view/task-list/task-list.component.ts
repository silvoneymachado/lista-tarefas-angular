import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/DTO/task';
import { TaskService } from 'src/app/model/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  public task: Task;

  constructor(private taskService: TaskService) {
    this.tasks = [];
  }

  ngOnInit() {
    this.task = new Task();
    // this.tasks = [];
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.Task().then(res => {
      this.tasks = res;
    }).catch(err => console.log(err));
  }

  public delete(t: Task): void {
    if (confirm('Deseja realmente apagar a tarefa?')) {
      this.taskService.deleteTask(t).then(res => {
        if (res) {
          this.getTasks();
        }
      }).catch(err => console.log(err));
    }
  }

  public setDone(t: Task): void {
    this.taskService
    .setDone(t)
    .then(res => {
      if (res) {
        this.getTasks();
      }
    })
    .catch(err => console.log(err));
  }

  public addTask(): void {
    this.taskService.saveTask(this.task).then(res => {
      if (res) {
        this.task = new Task();
        this.getTasks();
      }
    })
    .catch(err => console.log(err));
  }

  public updateTask(t: Task): void {
    const newName = prompt('Digite um novo nome para tarefa: ', t.name);
    if (newName != null) {
      t.name = newName;
      this.taskService.updateTask(t).then(res => {
        if (res) {
          this.task = new Task();
          this.getTasks();
        }
      })
      .catch(err => console.log(err));
    }
  }

}
