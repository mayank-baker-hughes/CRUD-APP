import { Component ,OnInit,AfterViewInit} from '@angular/core';
import {GetApiService} from '../../service/get-api.service'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import { RouterOutlet ,ActivatedRoute,RouterModule} from '@angular/router';



@Component({
  selector: 'app-students',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,MatButtonModule,RouterModule,RouterOutlet],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
  providers:[GetApiService]
})
export class StudentsComponent implements OnInit,AfterViewInit {
  
  constructor( private apiService: GetApiService){}
  studentsData : any;

  ngOnInit(){

   this.getAllStudentsData()

  }

  ngAfterViewInit(): void {
    console.log('called');
    
  }

  deleteStudentById(id:any){
    return this.apiService.deleteStudentById(id).subscribe((res)=>{
      console.log(res)
      this.getAllStudentsData()
    })

    
  }

  getAllStudentsData(){
    // to get all students data
    this.apiService.getStudents().subscribe((res)=>{
      console.log("Student Data" , res);
      this.studentsData = res;
    })

  }


  getUserById(id:any){
    this.apiService.getStudentById(id).subscribe((res)=>{
      console.log(res);
      
    })

  }

  // updateStudentById(id:any,data:any){
  //   this.apiService.updateStudentById(id,data).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }

  


}
