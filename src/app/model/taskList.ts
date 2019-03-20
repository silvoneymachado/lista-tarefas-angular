import { Task } from "./task";
import { TaskService } from "../service/task.service";

export class TaskList {
    public tasks: Task[] = [];
    private taskService: TaskService;
    
    constructor() {
        this.taskService = new TaskService();
    }
    
    public addTask(t: Task): boolean {
        return this.taskService.saveTask(t)
    }
    
    public removeTask(t: Task): boolean {
        return this.taskService.deleteTask(t);
    }
    
    public taskList(): Task[] {
        return this.taskService.Tasks();
    }
    
    public setDone(t: Task): boolean {
        return this.taskService.setDone(t);
    }
}