import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {SignInRequest} from "../../model/SignInRequest";
import {UserService} from "../../services/UserService/user.service";
import {UserDto} from "../../model/UserDto";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  title : string = "Sign In";

  signInRequest : SignInRequest = new SignInRequest();

  constructor(private userService : UserService) { }

  @Output("userNameEvent")
  requestEvent = new EventEmitter<string>();

  @Output("userId")
  requestEventId = new EventEmitter<number>();

  submit(){
    console.log(this.signInRequest);

    this.userService.getUserByEmail(this.signInRequest.email).subscribe((result:UserDto) =>{
      console.log(result);
      this.requestEvent.emit(result.firstname + " " + result.lastname);
      this.requestEventId.emit(result.id);
    })

    this.userService.signIn(this.signInRequest).subscribe((result:any) =>{
      console.log(result.token);
    })

  }

  @ViewChild('f',{static:true}) loginForm!:NgForm;

  loginSubmit(form : NgForm){
    this.loginForm.reset();
  }
}
