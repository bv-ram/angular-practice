import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password:new UntypedFormControl('')
  })
  constructor(private authService:AuthenticationService,private route:Router){}
  submit(){
    let payload = {
      email:this.register.getRawValue().email,
      password:this.register.getRawValue().password
    }
    console.log(this.register.getRawValue());
    this.authService.register(payload).subscribe((res)=>{
      console.log(res);
      if(res){
        this.route.navigate(['login'])
      }
      
    })
    
  }
}
