import { Component, OnInit } from '@angular/core';
// 2 add the file
import { StudentsService } from '../../students.service';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit {

  constructor(private student: StudentsService) { }

  // type fully requried data get  ////////////////////////////
  // 2
  studentData: any = [];

  ngOnInit(): void {
    this.student.getAllStudents().subscribe((alldata) => {
      // console.log(alldata);
      this.studentData = alldata;
      console.log(alldata);

    })

  }
  deletestudent(id: any) {
    this.student.deletedata(id).subscribe((result) => {
      this.ngOnInit();
      // console.log(result);
    });
  }
  editstudent(id: any) {
    console.log(id);

  }

}
