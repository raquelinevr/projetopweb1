import { Injectable } from '@angular/core';
import { Login } from './shared/modelo/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  emailFormControl: any;
  senhaFormControl: any;

  fazerLogin(login: Login): boolean {
    if (this.emailFormControl.valid && this.senhaFormControl.valid) {}

    return true;
  }
}

