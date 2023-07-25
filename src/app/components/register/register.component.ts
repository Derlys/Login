import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor() {}

  register() {
    // validación de ingreso de valores
    if (this.email == '' || this.password == '' || this.confirmPassword == '') {
      alert('Todos los campos son obligatorios');
    }
    //aquí realizo solicitud
    //Si fue exitoso redirecciona a login sino "No se confirmo token"
  }
}
