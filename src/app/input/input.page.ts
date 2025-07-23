// Nombre: Elizabeth Marte | Matrícula: 2021-1604
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './input.page.html',
})
export class InputPage {
  nombre: string = '';
  apellido: string = '';
  latitud: string = '';
  longitud: string = '';

  constructor(private router: Router) {}

  irAlMapa() {
    if (this.nombre && this.apellido && this.latitud && this.longitud) {
      this.router.navigate(['/map'], {
        queryParams: {
          nombre: this.nombre,
          apellido: this.apellido,
          lat: this.latitud,
          lng: this.longitud,
        },
      });
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
}

