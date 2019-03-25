import { Task } from '../../app/model/DTO/task';
import {TaskService } from '../../app/model/service/task.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from '../../app/view/task-list/task-list.component';

describe('TaskComponent', () => {
  const service = new TaskService();
  const task = new Task('Test task');
  let tasks = [];

  it('Deve inserir uma tarefa nova na lista', () => {
    service.saveTask(task);
    service.Task().then(ts => {
      tasks = ts;
      expect(tasks.length).not.toEqual(0);
    });
  });

  it('Deve alterar o status da tarefa adicionada', () => {
    service.setDone(task).then(() => {
      service.Task().then(ts => {
        tasks = ts;
        expect(tasks[0].status).toEqual(true);
      });
    });
  });

  it('Deve apagar uma tarefa informada', () => {
    service.deleteTask(task).then(() => {
      service.Task().then(ts => {
        tasks = ts;
        expect(tasks.length).toEqual(0);
      });
    });
  });
});
