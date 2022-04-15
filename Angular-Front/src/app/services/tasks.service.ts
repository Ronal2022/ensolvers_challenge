import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TasksService {

_url='https://localhost:44360/Task'
  constructor(
    private http:HttpClient
  ){}

  addTask(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this._url,{
      headers: header
    })
  }
}