import { Component,OnInit } from '@angular/core';
import {GetApiService} from '../../service/get-api.service'
import { routes } from '../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule,ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [HttpClientModule,FormsModule,ReactiveFormsModule,MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
  providers:[GetApiService]
})
export class UpdateComponent implements OnInit {

  user:any;

  constructor(private route:ActivatedRoute,private apiService :GetApiService){}
  studentUpdateForm = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    age:new FormControl( '',Validators.required),
    dob:new FormControl('',Validators.required)

    
  });

  userId = Number(this.route.snapshot.paramMap.get('id'))

  ngOnInit():void{
    console.log(this.userId,"clicked");
 
  }


  updateUserById(){
   console.log(this.studentUpdateForm.value);

   this.apiService.updateStudent(this.userId, this.studentUpdateForm.value).subscribe((res)=>console.log('data updated successfully' ,res))

  //  this.apiService.getStudents().subscribe((res)=>{
  //   console.log("Student Data" , res);
    alert('Data updated succesfully')

    this.studentUpdateForm.reset()
    

    



    

  }

}
