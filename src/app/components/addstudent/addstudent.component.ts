import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {

  constructor(private students: StudentsService) { }
  //create object
  addStudent = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 1000).toString),
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  });

  SaveData() {
    // console.log("done saving");

    // console.log(this.addStudent.value);
    debugger
    this.students.savestudentsdata(this.addStudent.value).subscribe((result) => {
      console.log(result)
      alert("success data saved");
      console.log("domready loaded");

    })

  }
  get name(){
    return this.addStudent.get('name')
  }
  get email(){
    return this.addStudent.get('email')
  }
  get password(){
    return this.addStudent.get('password')
  }

}
