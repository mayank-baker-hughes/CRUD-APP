import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import {HomeComponent} from './components/home/home.component';
import {StudentsComponent} from './components/students/students.component';

// import {BrowserAnimationsModule} from '@angular/platform-browser'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';

// import {MatInputModule,MatButtonModule, MatFormFieldModule} from '@angular/material'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,FormsModule,HttpClientModule,StudentsComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
