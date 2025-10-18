import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    constructor(private route:ActivatedRoute){}

    info:any

    info1:any

    ngOnInit():void{
      //this.info=this.route.snapshot.paramMap.get('name');
      //console.log(this.info);
      this.info={
        name:this.route.snapshot.paramMap.get('name'),
        age:this.route.snapshot.paramMap.get('age'),
        email:this.route.snapshot.paramMap.get('email')
      }

      
        this.route.queryParams.subscribe(params=>{
            this.info1={
             name:params['name'],
             age:params['age'],
             email:params['email']
            }
        })
      
    }
}
