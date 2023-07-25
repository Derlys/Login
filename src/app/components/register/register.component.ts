import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
export interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router
  ) {}

  register() {
    // validación de ingreso de valores
    if (this.email == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }
    //Validamos que las passwords sean iguales

    if (this.password != this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }
    //aquí creo el objeto

    const user: User = {
      email: this.email,
      password: this.password,
    };

    this._userService.register(user).subscribe((data) => {
      this.toastr.success(
        'El usuario fue registrado con exito',
        'Usuario registrado'
      );
      this.router.navigate(['/login']);
    });
    //Si fue exitoso redirecciona a login sino "No se confirmo token"
  }
}
