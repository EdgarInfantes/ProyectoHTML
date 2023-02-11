import { Component } from '@angular/core';
import { UserService } from './user.service';
import { user } from './user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(public nuevoUsuario: UserService) {}
  agregaUsuario(form: NgForm) {
    if (
      form.value.name != '' &&
      form.value.apellido != '' &&
      form.value.correo &&
      form.value.pass != '' &&
      form.value.genero != 'Sexo' &&
      form.value.repite != ''
    ) {
      if (form.value.pass == form.value.repite) {
        const nuevoUsuario = new user(
          form.value.nombre,
          form.value.apellido,
          form.value.correo,
          form.value.pass,
          form.value.repite
        );

        this.nuevoUsuario.addUser(nuevoUsuario);
        form.reset();
      } else {
        alert('Las contraseñas no coinciden');
      }
    } else {
      alert('Llene todos los campos');
    }
  }
}
