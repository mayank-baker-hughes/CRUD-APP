import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }
  getStudentUrl:string = 'http://localhost:8000/api/v1/students'
  createStudentUrl:string = 'http://localhost:8000/api/v1/students'
  getStudents():Observable<any>{

    return this.http.get(this.getStudentUrl)


  }

  createStudents(data:any):Observable<any>{
    console.log(data)
    return this.http.post(this.createStudentUrl,data,{responseType: 'text'})
  }

  deleteStudentById(id:any):Observable<any>{

    return this.http.delete(`${this.getStudentUrl}/${id}`,{responseType: 'text'})

  }

  getStudentById(id:any):Observable<any>{

    return this.http.get(`${this.getStudentUrl}/${id}`)

  }

  updateStudent(id:any,user:any):Observable<any>{
    return this.http.put(`${this.getStudentUrl}/${id}`,user,{responseType: 'text'})
  }


  
}
