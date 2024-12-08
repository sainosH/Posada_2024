import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  events = [
    { time: '7:00 PM', event: 'Bienvenida' },
    { time: '8:00 PM', event: 'Cena' },
    { time: '9:00 PM', event: 'Juegos y dinámicas' },
    { time: '10:00 PM', event: 'Baile y convivencia' }
  ];
}