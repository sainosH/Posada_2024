import { Component } from '@angular/core';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [],
  templateUrl: './rsvp-form.component.html',
  styleUrl: './rsvp-form.component.scss'
})
  
export class RsvpFormComponent {
  submitForm() {
    alert('¡Gracias por confirmar tu asistencia!');
  }
}
