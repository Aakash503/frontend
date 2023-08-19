import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { OTP } from '../models/models/OTP';
import { User } from '../models/models/user';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {


  user =new User()
  number1:any
  // otp1:OTP={
    
  // }
  otp1:OTP={
    
  }

  
  

  constructor(private login:LoginService,private route:Router, private fb:FormBuilder, private snackBar:MatSnackBar) { }
  profileForm = this.fb.group({
    email: ['', [Validators.required]]
  })

  get email() { return this.profileForm.get("email") }
   

  onSubmit(){
    // this.login.setEmail(this.profileForm.value.email)

    // this.login.loginFunction(this.profileForm.value).subscribe(
    //   data => 
    //   {
    //    localStorage.setItem("token",data.token)
    //    this.login.storeToken(data.token)
    //    console.log(this.email)
    //    console.log(data.token)
    //    this.snackBar.open("Login Successfully!", "Close", { duration: 3000 }); 
    //    this.route.navigate(["/home"]);
    // },
    //   error => {
    //     window.alert("Login Failed! Please Enter the correct Credentials!")
    //     console.log("exception occured")
    //   }
    // )

     this.number1=this.login.getNewpassword(this.profileForm.value.email).subscribe(data=>{
      this.otp1=data;
      this.login.otpShow=data
      localStorage.setItem("otpGen",data)
      localStorage.getItem('otpGen')
    alert("otp has been sent") 
    alert("your otp is :"+localStorage.getItem('otpGen'))   
    console.log(this.otp1);
    this.route.navigate(["/otpverification"])


     },error => {
      window.alert("email access Failed! Please Enter the correct emailid!")
      console.log("exception occured")
    });
   
     
  }

  reload(){
    window.location.reload();
  }

}
