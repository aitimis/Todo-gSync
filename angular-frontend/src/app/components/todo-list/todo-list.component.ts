import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks = [
    { id: '1', title: 'Example Task 1', completed: false },
    { id: '2', title: 'Example Task 2', completed: true }
  ];

  addTask(taskTitle: string) {
    this.tasks.push({ id: new Date().toISOString(), title: taskTitle, completed: false });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  toggleComplete(taskId: string) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
