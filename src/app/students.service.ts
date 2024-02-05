import { Injectable } from '@angular/core';

// install
// ng g service students

//  import this file
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url = "http://localhost:3000/students"

  //1
  constructor(private http: HttpClient) { }
  getAllStudents() {
    //1 get data use
    return this.http.get(this.url)

  }
  //2
  savestudentsdata(data: any) {
    return this.http.post(this.url, data)
  }
  //3
  deletedata(id: any) {
    console.log("Deleting student with ID:", id);
    return this.http.delete(`${this.url}/${id}`);
  }
  //4 get data in input box use
  getStudentid(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  //5 update data send list.ts 
  updateStudentdata(id: any, data: any) {
    // debugger
    // console.log("done");
    return this.http.put(`${this.url}/${id}`, data);
  }
}



