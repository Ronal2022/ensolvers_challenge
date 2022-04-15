import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

export class TaskModel {
    name:string;
    completed:boolean;

    constructor(){
      this.name = "";
      this.completed = false;
    }
  }
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private tasksService:TasksService){
    this.tasksService.getTasks().subscribe(resp=>{
      this.tasks = resp; 
    })
  }
  
  title:string = 'Ensolvers Crud';

  tasks:TaskModel[] = [];

  myValue:number | null = null;
  createModel:TaskModel = new TaskModel();
  updateModel:TaskModel = new TaskModel();
  hideUpdate:boolean = true;

  addTask():void{
    if(this.createModel.name.trim() == ""){
      alert("you did not enter any task.");
    }else{
      this.tasksService.saveTasks(this.createModel).subscribe(resp=>{
        this.tasks=resp;
      })
      this.createModel = new TaskModel();
      alert("Task added successfully.");
    }
  }

  editTask(i:number):void{
    this.hideUpdate = false;
    this.updateModel.name = this.tasks[i].name;
    this.myValue = i;
  }

  updateTask():void{
      if(this.updateModel.name.trim() == ""){
        alert("There is nothing to edit.");
      }else if(this.myValue == null){
        alert("This task is not registered, for editing")
      }else{
          let i = this.myValue;
      for(let j=0; j <this.tasks.length; j++){
        if(i == j){
          this.tasks[i] = this.updateModel;
          this.tasksService.updateTasks(this.updateModel).subscribe(resp=>{
            this.tasks = resp;
          });
          this.myValue = null;}
        }
      }
    }

  deleteTask(deleteApiTasks:TaskModel):void{
    if(confirm("you want to delete this task?")){
      this.tasksService.deleteTasks(deleteApiTasks).subscribe(resp=>{
        this.tasks = resp;
      })
    alert("Task delete successfully.");
    }
  }
}

