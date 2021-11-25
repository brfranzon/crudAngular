import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isUserLoggedIn: boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.isUserLoggedIn);
    this.loginService.showHeaderMenu.subscribe(showMenu => { console.log('event', showMenu); this.isUserLoggedIn = showMenu })
  }

  goToAddForm() {
    this.router.navigate(['add-form']);
  }

  userLogout() {
    this.loginService.userLogout();
  }

}
