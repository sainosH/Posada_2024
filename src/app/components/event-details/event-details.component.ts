import { Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})

export class EventDetailsComponent {
  details = [
    { icon: 'calendar_today', color: 'text-red-500', title: 'Fecha y Hora', description: '17 de Diciembre, 2024 - 7:00 PM' },
    { icon: 'location_on', color: 'text-green-500', title: 'Ubicación', description: 'Salón de Eventos XYZ' },
    { icon: 'checkroom', color: 'text-blue-500', title: 'Código de Vestimenta', description: 'Elegante Casual' }
  ];
}
