import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
login=new UntypedFormGroup({
  email:new UntypedFormControl(''),
  password:new UntypedFormControl('')
})
constructor(private authService:AuthenticationService,private route:Router){}
loginUser(){
  let payload = {
    email:this.login.getRawValue().email,
    password:this.login.getRawValue().password
  }
  this.authService.login(payload).subscribe((res)=>{
    console.log(res);
  if(res && res.data && res.data.token){
    localStorage.setItem("token", res.data.token)
    this.route.navigate(['dashboard'])
  }
  })
}
}
