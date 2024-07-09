import { Component } from '@angular/core';
import {GetStartedComponent} from "../get-started/get-started.component";
import {CoverComponent} from "../cover/cover.component";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    GetStartedComponent,
    CoverComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}
