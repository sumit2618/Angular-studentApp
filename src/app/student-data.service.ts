import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const api="http://localhost:5555/student/"; //api is global

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  saveData(data)
  {
    return this.httpClient.post(api,data)
  }

  getDataById(id){
    return this.httpClient.get(api+id)
  }

  getData()
  {
    return this.httpClient.get(api)
  }

  updateData(id,data)
  {
    return this.httpClient.put(api+id,data);
  }

  deleteData(id)
  {
    return this.httpClient.delete(api+id);
  }
  constructor(private httpClient:HttpClient) { }

}
