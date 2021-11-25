import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public autenticado: boolean = false;
  public showHeaderMenu: EventEmitter<any> = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  userLogin(email: string, password: string) {
    if (email === 'brfranzon' && password === '123') {
      this.autenticado = true;
      this.showHeaderMenu.emit(true);
      this.router.navigate(['dashboard']);
    } else {
      this.autenticado = false
      this.showHeaderMenu.emit(this.autenticado);
    }
  }

  userLoggedIn(): boolean {
    return this.autenticado;
  }

  userLogout() {
    this.autenticado = false;
    this.showHeaderMenu.emit(this.autenticado);
    this.router.navigate(['']);
  }
}
