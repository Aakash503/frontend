import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../models/models/user';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  image?: File
  wantToUpdate: boolean = false;
  currentUser?: User;
  isFileValid?: boolean;
  profilePicture?:string;
  email:any;
  phonenumber:any;
  username:any
  
  user:User={};

  constructor(private login:LoginService,private snackbar:MatSnackBar,private movieService:MovieService,private router:Router){}
  ngOnInit(): void {
   

       this.movieService.getUserByEmail().subscribe(data=>{
        this.user=data;
       })

    // // this.images()
  }


  // updateImage(event: any) {
  //   this.image = event.target.files![0];
  //   this.isFileValid = this.image?.size! <= 1024000;
  //   if (!this.isFileValid) this.snackbar.open("File is too big!", "Close", {duration: 3000});
  // }


  // images(){
  //   this.login.getUser(this.email).subscribe(data=>{
  //     this.user=data
  //   })
  // }

      // getUserDetails():any{
      //   this.movieService.updateUserDetails().subscribe()
      // }

      editUser(){
        this.router.navigate(["/userupdate"])
      }
}