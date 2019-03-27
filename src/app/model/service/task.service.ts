import { Injectable } from '@angular/core';
import { Task } from '../DTO/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[];

  constructor() {
    this.getTasks();
  }

  public Task(): Promise<Task[]> {
    return new Promise<Task[]>((resolve, reject) => {
      try {
        (this.tasks = JSON.parse(localStorage.getItem('tasks')));
        resolve(this.tasks);
      } catch (error) {
        reject(error);
      }
    });
  }

  private getTasks(): void {
    this.Task()
      .then(res => {
        this.tasks = res;
      })
      .catch(err => console.log(err));
  }

  private setTasks(ts: Task[]): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        // tslint:disable-next-line:quotemark
        localStorage.setItem("tasks", JSON.stringify(ts));
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  public saveTask(t: Task): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        if (!this.tasks) {
          this.tasks = [];
        }
        this.tasks.push(this.setIdTask(t));
        resolve(this.setTasks(this.tasks));
      } catch (error) {
        reject(error);
      }
    });
  }

  public deleteTask(t: Task): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        this.getTasks();
        if (this.tasks.length > 0) {
          this.tasks = this.tasks.filter(i => i.id !== t.id);
          this.setTasks(this.tasks);
          resolve(this.setTasks(this.tasks));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  private setIdTask(t: Task): Task {
    if(this.tasks.length === 0){
      t.id = this.tasks.length + 1;
    } else {
      t.id = this.tasks[this.tasks.length -1].id + 1;
    }
    return t;
  }


  public setDone(t: Task): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        this.getTasks();
        if (this.tasks.length > 0) {
          const index = this.tasks.findIndex(ts => ts.id === t.id);
          this.tasks[index].done = !this.tasks[index].done;
          resolve(this.setTasks(this.tasks));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  public updateTask(t: Task): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        this.getTasks();
        if (this.tasks.length > 0) {
          const index = this.tasks.findIndex(ts => ts.id === t.id);
          this.tasks[index] = t;
          resolve(this.setTasks(this.tasks));
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
