import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task: any;
  @Output() removeTask = new EventEmitter<string>();
  @Output() toggleComplete = new EventEmitter<string>();

  onRemoveTask(event: Event) {
    // event.stopPropagation();
    this.removeTask.emit(this.task.id);
  }

  onToggleComplete() {
    this.toggleComplete.emit(this.task.id);
  }
}
