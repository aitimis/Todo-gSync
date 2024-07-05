import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  newTask: string = '';

  @Output() addTask = new EventEmitter<string>();

  onAddTask() {
    if (this.newTask.trim()) {
      this.addTask.emit(this.newTask);
      this.newTask = '';
    }
  }
}