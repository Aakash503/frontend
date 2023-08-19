import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../models/models/user';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent {

  userObject = new User();
  image?: File
  wantToUpdate: boolean = false;
  currentUser?: User;
  isFileValid?: boolean;
  profilePicture?: string;
  detailObj:User={}


  addressForm = this.fb.group({
    
    email: ['', [Validators.required, Validators.pattern("([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com")]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/)]]
    
  });

  constructor(private fb: FormBuilder, private login: LoginService, private route: Router, private snackbar: MatSnackBar) { }
  formdata = new FormData;

  get username() { return this.addressForm.get("username") }
  get email() { return this.addressForm.get("email") }
  get password() { return this.addressForm.get("password"); }
  get gender() { return this.addressForm.get("gender") }
  get phoneNumber() { return this.addressForm.get("phoneNumber"); }


  imgupload(event: any) {
    let file: any = event.target.files[0];
    console.log(file);
    this.formdata.append("file", file);
  }



  onSubmit(): void {
   

    this.login.createNewPassword(this.email?.value,this.password?.value,this.detailObj).subscribe(data => {
      // console.log(this.detailObj)
      // console.log(data);
      this.snackbar.open("password created Successfully!", "Close", { duration: 3000 });
      error: (err: any) => this.snackbar.open("password creation  Failed! Due to network issues! Try after some time!", "Close", { duration: 3000 });
    });
    this.route.navigate(['/login'])

  }
}
