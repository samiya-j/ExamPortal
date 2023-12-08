import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  constructor(private userService:UserService, private snack:MatSnackBar){}
  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:''
  }
  ngOnInit(): void {}
     formSubmit() {
      alert('submit');
      console.log(this.user);
      if(this.user.username=="" || this.user.username==null)
      {
        // alert("user is required");
        this.snack.open("Username is required",'',{
          duration:3000,
        });
        return;
      }
      this.userService.addUser(this.user).subscribe(
        {
          next: (data:any) => Swal.fire('Success','User id '+data.id+' registered sucessfully'),
          error: (err) => this.snack.open("user already exists",'',{
            duration:3000
          }),
          complete: () => console.log("completed")
        }
      )

     }
  }

