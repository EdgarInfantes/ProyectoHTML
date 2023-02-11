import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  envia(formu: NgForm) {
    if (
      formu.value.Nombre != '' &&
      formu.value.Email != '' &&
      formu.value.Telefono != '' &&
      formu.value.mensaje != ''
    ) {
      alert('Se envió correctamente');
      formu.reset();
    } else {
      alert('Complete todos los campos');
    }
  }
}
