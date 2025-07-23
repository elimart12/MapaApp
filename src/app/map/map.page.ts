// Nombre: Elizabeth Marte | Matrícula: 2021-1604
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [IonicModule], // 👈 Asegúrate de importar esto
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  map: any;

  lat = 18.4861;
  lon = -69.9312;

  ionViewDidEnter() {
    this.map = L.map('map').setView([this.lat, this.lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    const marker = L.marker([this.lat, this.lon]).addTo(this.map);

    marker.on('click', () => {
      this.getLocationInfo(this.lat, this.lon);
    });
  }

  async getLocationInfo(lat: number, lon: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
    const response = await fetch(url);
    const data = await response.json();
    const city = data.address.city || data.address.town || data.address.village;
    const country = data.address.country;

    alert(`Ciudad: ${city}\nPaís: ${country}`);
  }
}

