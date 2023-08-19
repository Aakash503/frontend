import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { OTP } from '../models/models/OTP';
import { User } from '../models/models/user';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css']
})
export class OtpverificationComponent {

  
  // user =new User()
  // number1:any
  

  // constructor(private login:LoginService,private route:Router, private fb:FormBuilder, private snackBar:MatSnackBar) { }
  // profileForm = this.fb.group({
  //   otp: ['', [Validators.required],[Validators.minLength(4)]]
  // })

  // get otp() { return this.profileForm.get("otp") }
   

  // onSubmit(){
  
  // }

  // reload(){
  //   window.location.reload();
  // }







  user =new User()
  number1:any
  // otp1:OTP={
    
  // }
  otp1:OTP={
    
  }

  flag=false

  
  

  constructor(private login:LoginService,private route:Router, private fb:FormBuilder, private snackBar:MatSnackBar) { }
  profileForm = this.fb.group({
    otp: ['', [Validators.required]]
  })

  get otp() { return this.profileForm.get("otp") }
   

  onSubmit(){
    

    //  this.number1=this.login.getNewpassword(this.profileForm.value.otp).subscribe(data=>{
    //   this.otp1=data;
    //   this.login.otpShow=data
    //   localStorage.setItem("otpGen",data)
    //   localStorage.getItem('otpGen')
    // alert("otp has been sent") 
    // alert("your otp is :"+localStorage.getItem('otpGen'))   
    // console.log(this.otp1);
    // this.route.navigate(["/otpverification"])


    //  },error => {
    //   window.alert("email access Failed! Please Enter the correct emailid!")
    //   console.log("exception occured")
    // });
   

    if (this.profileForm.value.otp==this.login.otpShow) {
      console.log(this.login.otpShow)
      this.flag=true
      this.route.navigate(['/createpassword'])
    }
     else {
      alert("please enter the correct otp")
    }


   
  }

  reload(){
    window.location.reload();
  }

}
