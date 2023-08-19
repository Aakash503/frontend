import { Movies } from "./movies";

export class User{
      email?: String;
      username?: String;
      password?: String;
      gender?: String;
      phoneNumber?: String;
      

      constructor()
      {
        this.email="",
        this.username="",
        this.password="",
        this.gender="",
        this.phoneNumber=""
      }
}