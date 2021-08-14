import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Event } from '@angular/router';
 
@Component({
  selector: 'app-tast-item',
  templateUrl: './tast-item.component.html',
  styleUrls: ['./tast-item.component.css']
})
export class TastItemComponent implements OnInit {
@Input() task : Task ;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
@Output() onToggleReminder:EventEmitter<Task>=new EventEmitter();

faTimes =faTimes;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  onDelete(task){
    console.log(task);
    this.onDeleteTask.emit(task);
  }
  onToggle(task){
    console.log(task);
    this.onToggleReminder.emit(task);
  }

}
