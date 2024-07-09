import {Component, EventEmitter, Output} from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {CollaboratorsComponent} from "../collaborators/collaborators.component";
import {CoursesComponent} from "../courses/courses.component";
import {AboutUsComponent} from "../about-us/about-us.component";
import {ContactComponent} from "../contact/contact.component";
import {TmpFormComponent} from "../tmp-form/tmp-form.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CarouselComponent,
    CollaboratorsComponent,
    CoursesComponent,
    AboutUsComponent,
    ContactComponent,
    TmpFormComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  @Output("userNameEvent")
  requestEvent = new EventEmitter<string>();

  onElementAdd($event: string) {
    this.requestEvent.emit($event);
  }
}
