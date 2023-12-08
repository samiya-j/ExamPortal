import { Component } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user:any;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
  }


}
