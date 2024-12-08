import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})

export class GalleryComponent {
  //quien vaya a implementar esto revisar la documentacion de angular 18 porque cambió la forma de agregar las imágenes y no usen el amigo de arriba porque no sabe xd
  images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
}
