import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };
  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log('login btn clicked');
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snackBar.open('Username is required !', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snackBar.open('Password is required !', '', {
        duration: 3000,
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe
    ({
      next: (data:any) => {
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe({
          next:(user: any) => {
            this.loginService.setUser(user);
            console.log(user);
  
            if (this.loginService.getUserRole() == 'ADMIN') {
              this.router.navigate(['admin']);
              this.loginService.loginStatusSubject.next(true);
              // window.location.href='/admin';
            } else if (this.loginService.getUserRole() == 'normal') {
              this.router.navigate(['user-dashboard']);
              this.loginService.loginStatusSubject.next(true);
              // window.location.href='/user-dashboard';
            } else {
              this.loginService.logout();
              //location.reload();
            }

      } 
  });
},
error: (err) => {
  console.log(err);
        this.snackBar.open('Invalid Credentials! Try again', '', {
          duration: 3000,
        });
},
complete: () => console.log("completed")
  })





}}
