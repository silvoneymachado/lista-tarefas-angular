import { Task } from "../model/task";

export class TaskService {
    private tasks: Task[];

    constructor() {
        this.getTasks();
    }

    public Tasks(): Task[] {
        return JSON.parse(localStorage.getItem("tasks"));
    }

    private getTasks(): void {
        this.tasks = this.Tasks();
    }

    private setTasks(ts: Task[]): void {
        localStorage.setItem("tasks", JSON.stringify(ts));
    }

    public saveTask(t: Task): boolean {
        if (!this.tasks) {
            this.tasks = [];
        }
        this.tasks.push(this.setIdTask(t));
        console.log(this.tasks);
        this.setTasks(this.tasks);
        return true;
    }

    public deleteTask(t: Task): boolean {
        this.getTasks();
        this.tasks = this.tasks.filter(i => { return i.id != t.id; });
        this.setTasks(this.tasks);
        return true;
    }

    private setIdTask(t: Task): Task {
        t.id = this.tasks.length + 1;
        return t;
    }

    public setDone(t: Task): boolean {
        this.getTasks();
        let index = this.tasks.findIndex(ts => ts.id == t.id);
        this.tasks[index].done = !this.tasks[index].done;
        this.setTasks(this.tasks);
        return true;
    }

}