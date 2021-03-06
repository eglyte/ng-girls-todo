import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: [ './todo-item.component.scss' ]
})
export class TodoItemComponent implements OnInit {
    @Input() item: TodoItem;
    @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
    @Output() update: EventEmitter<any> = new EventEmitter();
    edit = false;

    constructor() {
    }

    ngOnInit() {
    }

    removeItem() {
        this.remove.emit(this.item);
    }

    updateItem(title: string) {
        this.item.title = title;
        this.update.emit({
            item: this.item
        });
    }

    completeItem() {
        this.update.emit({
            item: this.item,
            changes: {completed: !this.item.completed}
        });
    }

}
