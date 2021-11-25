import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public autenticado: boolean = false;
  public mostratMenu: EventEmitter<any> = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  userLogin(email: string, password: string) {
    if (email === 'brfranzon' && password === '123') {
      this.autenticado = true;
      this.mostratMenu.emit(true);
      this.router.navigate(['dashboard']);
    } else {
      this.autenticado = false
      this.mostratMenu.emit(this.autenticado);
    }
  }

  userLoggedIn(): boolean {
    return this.autenticado;
  }

}
