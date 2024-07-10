import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SignUpRequest} from "../../model/SignUpRequest";
import {UserDto} from "../../model/UserDto";
import {UserService} from "../../services/UserService/user.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  title : string = "Sign Up";
  disabled : boolean = true;

  signUpRequest : SignUpRequest = new SignUpRequest();

  constructor(private userService : UserService) { }

  confirmPsw(event : Event){
    this.disabled = !((<HTMLInputElement>event.target).value == this.signUpRequest.password);
  }

  submit(){
    this.userService.signUp(this.signUpRequest).subscribe(() => {
      console.log(this.signUpRequest);
      });
  }

}
