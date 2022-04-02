import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor(private httpClient:HttpClient) { }

  getTask(){
    return this.httpClient.get<Task[]>('http://localhost:3000');
  }
}
