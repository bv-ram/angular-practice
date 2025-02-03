import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerUser=new UntypedFormGroup({
    firstName:new UntypedFormControl(""),
    lastName:new UntypedFormControl(""),
    dob:new UntypedFormControl(""),
    gender:new UntypedFormControl(""),
    phoneno:new UntypedFormControl(""),
    email:new UntypedFormControl(""),
    address:new UntypedFormControl(""),
    area:new UntypedFormControl(""),
    city:new UntypedFormControl(""),
    state:new UntypedFormControl(""),
    country:new UntypedFormControl(""),
    pincode:new UntypedFormControl(""),
  })
  genderList=["Male","Female","Other"]
  userData: any;
  constructor(private userService:AuthenticationService){}

  ngOnInit(){

  }

  saveData(){
    console.log(this.registerUser.getRawValue());
    let payload ={
      firstName:this.registerUser.getRawValue().firstName,
      lastName:this.registerUser.getRawValue().lastName,
      dob:this.registerUser.getRawValue().dob,
      gender:this.registerUser.getRawValue().gender,
      phoneNo:this.registerUser.getRawValue().phoneno,
      email:this.registerUser.getRawValue().email,
      address:{
        address:this.registerUser.getRawValue().address,
        area:this.registerUser.getRawValue().area,
        city:this.registerUser.getRawValue().city,
        state:this.registerUser.getRawValue().state,
        country:this.registerUser.getRawValue().country,
        pincode:this.registerUser.getRawValue().pincode
      }
    }
    this.userService.userCreate(payload).subscribe((res)=>{
      console.log(res,"rs123");

      this.userService.getUserById(res.data.userId).subscribe((res)=>{
        this.userData = res
        console.log(this.userData,"this.userData");
        
      })
    })
    
  }
}
