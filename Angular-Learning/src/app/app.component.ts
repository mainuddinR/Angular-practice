import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [NgIf,NgFor,NgSwitch, NgSwitchCase,NgSwitchDefault,RouterOutlet ,RouterLink,
    HeaderComponent , ReactiveFormsModule ,FormsModule 
  ], //ng sob gular bodle CommonModule use korlei hoy
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Learning';
  bgcolor ='green';
  fontSize ='30px';
  fontSize1='40';
  headingBig='80px'
  headingSmall='40px'

  zoom=false
  updateHeadingSize(){
    this.zoom=!this.zoom;
  }

  show=false

  employee=["Anil","Sunil","Kiran","Vijay"]

  userData=[
    {
      name:"Mainuddin",
      age:24,
      email:"main@gmail.com"
    },
    {
      name:"Atikul",
      age:20,
      email:"atikul@gmail.com"
    }
    ,{
      name:"Marjia",
      age:25,
      email:"marjia@gmail.com"
    }
  ]

  login=true

  handleLogin(){
    this.login=!this.login
  }

   block=0;

   updatedBlock(){
    this.block++;
    if(this.block>=5){
      this.block=0;
    }
   }

   color:string='green'

   changeColor(color:string){
      this.color=color
   }

   //reactive form example
   name=new FormControl();
   password=new FormControl();
   //default va1lue set kora jay
  //  name=new FormControl('Atikul');
  //  password=new FormControl('12345');

   displayValue(){
      console.log(this.name.value,this.password.value);
   }
   setValue(){
      this.name.setValue('Mainuddin');
      this.password.setValue('67890');
   }

   //form grouping

   profileRegistration= new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
   })
   onSubmit(){
    console.log(this.profileRegistration.value);
   }

   get firstName(){
    return this.profileRegistration.get('firstName');
   }
   get lastName(){
    return this.profileRegistration.get('lastName');
   }
   get email(){
    return this.profileRegistration.get('email');
   }
   get Password(){
    return this.profileRegistration.get('password');
   }

   //template driven form example

   userDetails:any;

   addDetails(data:NgForm){
    console.log(data);
    this.userDetails=data;
   }

}

