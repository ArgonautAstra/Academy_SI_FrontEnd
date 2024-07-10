import {Component, EventEmitter, Output} from '@angular/core';
import {SignInComponent} from "../sign-in/sign-in.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {AddCourseComponent} from "../add-course/add-course.component";
import {NgIf} from "@angular/common";
import {SubscribeComponent} from "../subscribe/subscribe.component";

@Component({
  selector: 'app-tmp-form',
  standalone: true,
  imports: [
    SignInComponent,
    SignUpComponent,
    AddCourseComponent,
    SubscribeComponent,
    NgIf
  ],
  templateUrl: './tmp-form.component.html',
  styleUrl: './tmp-form.component.css'
})
export class TmpFormComponent {

  @Output("userNameEvent")
  requestEvent = new EventEmitter<string>();

  isLogged : boolean = false;

  user : number;

  onElementAdded($event: string) {
    this.requestEvent.emit($event);
    this.isLogged = true;
  }

  getId($event: number) {
    this.user = $event;
  }
}
