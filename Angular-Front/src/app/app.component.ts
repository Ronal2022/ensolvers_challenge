import { Component } from '@angular/core';

export class TaskModel {
    name:string;

    constructor(){
      this.name = "";
    }
  }
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'Ensolvers Crud';

  tasks:TaskModel[] = [
    {'name': 'buy groceries'},
    {'name': 'Prepare weekly report'},
    {'name': 'Write to candidates'}
  ];

  myValue:number | null = null;
  createModel:TaskModel = new TaskModel();
  updateModel:TaskModel = new TaskModel();
  hideUpdate:boolean = true;

  addTask():void{
    if(this.createModel.name.trim() == ""){
      alert("you did not enter any homework.");
    }else{
    this.tasks.push(this.createModel);
    this.createModel = new TaskModel();
      alert("Task added successfully.");
    }
  }

  deleteTask(i:number):void{
    if(confirm("you want to delete this task?")){
      this.tasks.splice(i,1);
    alert("Task delete successfully.");
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
        this.updateModel = new TaskModel();
        this.myValue = null;}
      }
    }
  }
}

