import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TaskModel } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

_url='https://localhost:44360/Task'
  constructor(
    private http:HttpClient
  ){}

  getTasks(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get<TaskModel[]>(this._url,{
      headers: header
    })
  }

  deleteTasks(deleteApiTask:TaskModel){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.delete<TaskModel[]>(this._url,{
      headers: header,
      body: deleteApiTask
    })
  }

  updateTasks(updateApiTask:TaskModel){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.put<TaskModel[]>(this._url,{
      headers: header,
      body: updateApiTask
    })
  }

  saveTasks(saveApiTask:TaskModel){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.post<TaskModel[]>(this._url,{
      headers: header,
      body: saveApiTask
    })
  }



  





}