import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SignInRequest} from "../../model/SignInRequest";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  title : string = "Sign In";

  signInRequest : SignInRequest = new SignInRequest();

  @Output("userNameEvent")
  requestEvent = new EventEmitter<string>();

  submit(){
    console.log(this.signInRequest);
    this.requestEvent.emit(this.signInRequest.email);
  }
}
