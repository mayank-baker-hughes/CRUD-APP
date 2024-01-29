import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { CreateComponent } from './components/create/create.component';
import {UpdateComponent} from './components/update/update.component';


export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },

    {
        path:"students",
        component:StudentsComponent,
    },

    {
        path:"create",
        component:CreateComponent
    },
    {
      path:"students/edit/:id",
      component:UpdateComponent
    }
    
];
