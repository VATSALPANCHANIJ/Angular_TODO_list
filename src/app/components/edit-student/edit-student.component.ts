import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from '../../students.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit {

  constructor(private students: StudentsService, private router: ActivatedRoute) { }

  //create object
  editStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.router.snapshot.params['id']);
    this.students.getStudentid(this.router.snapshot.params['id']).subscribe((data: any) => {
      // console.log(data);
      this.editStudent = new FormGroup({
        name: new FormControl(data['name']),
        email: new FormControl(data['email']),
        password: new FormControl(data['password'])
      });

    });
  }
  UpdateData() {
    console.log(this.editStudent.value);
    this.students.updateStudentdata( this.router.snapshot.params['id'],this.editStudent.value).subscribe((data) => {
      console.log(data);
      // debugger
    });
    alert('Student updated successfully');
  }
}
