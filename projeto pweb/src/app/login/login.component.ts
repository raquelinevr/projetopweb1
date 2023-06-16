import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^.+@academico\.com$/)
  ]);
  
  senhaFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  fazerLogin() {
    if (this.emailFormControl.valid && this.senhaFormControl.valid) {
      const email = this.emailFormControl.value ?? '';
      const senha = this.senhaFormControl.value ?? '';

      // Lógica de autenticação
      if (this.validarCredenciais(email, senha)) {
        this.router.navigate(['/adicionar-projetos']);
        // Autenticação bem-sucedida, redirecionar ou realizar outras ações
        console.log('Login bem-sucedido');
      } else {
        // Exibir mensagem de erro para credenciais inválidas
        console.log('Credenciais inválidas');
      }
    }
  }

  private validarCredenciais(email: string, senha: string): boolean {
    // Lógica de validação das credenciais
    // Verifique se o email e a senha atendem aos critérios de validação
    // Por exemplo, comparar com uma lista de usuários válidos no servidor ou em algum local de armazenamento seguro
    return email === 'usuario@academico.com' && senha === '123456';
  }

}
