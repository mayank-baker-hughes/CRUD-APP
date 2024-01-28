import { Component,OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
import { GetApiService } from '../../service/get-api.service';
import { HttpClientModule } from '@angular/common/http'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';





@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,HttpClientModule,MatButtonModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers:[GetApiService]
})
export class CreateComponent {
  constructor(private apiService: GetApiService){}

  studentForm = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    age:new FormControl( '',Validators.required),
    dob:new FormControl('',Validators.required)

    
  });

  submitDetails(){
    console.log(this.studentForm.value)
    const data = (this.studentForm.value)
    this.apiService.createStudents(data).subscribe((res)=>{
      console.log(res,"Hi")

    })
    alert('Data added succesfully')

    this.studentForm.reset()
  }


}
