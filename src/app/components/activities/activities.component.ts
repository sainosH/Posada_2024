import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})

export class ActivitiesComponent {
  activities = [
    {
      icon: 'videogame_asset',
      color: 'text-green-500',
      title: 'Trivias Tecnológicas',
      description: 'Pon a prueba tus conocimientos en informática y tecnología.'
    },
    {
      icon: 'mic',
      color: 'text-red-500',
      title: 'Karaoke Navideño',
      description: 'Canta tus villancicos favoritos con un toque tecnológico.'
    }
  ];
}
