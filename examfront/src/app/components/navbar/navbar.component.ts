import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public login:LoginService) {}
    isLoggedIn=false;
    user=null;
    ngOnInit():void{
      this.isLoggedIn=this.login.isLoggedIn();
      this.user=this.login.getUser();
      this.login.loginStatusSubject.asObservable().subscribe(() => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      });
    }
    public logout(){
      // this.isLoggedIn=false;
      // this.user=null;
      this.login.logout();
      window.location.reload();
    }
  

}
