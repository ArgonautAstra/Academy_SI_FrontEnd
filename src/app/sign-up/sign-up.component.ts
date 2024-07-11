import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {SignUpRequest} from "../../model/SignUpRequest";
import {UserService} from "../../services/UserService/user.service";
import {NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {Router, RouterLink} from "@angular/router";
import {UserDto} from "../../model/UserDto";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FooterComponent,
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  title : string = "Sign Up";
  disabled : boolean = true;

  signUpRequest : SignUpRequest = new SignUpRequest();

  constructor(private userService : UserService, private router : Router) { }

  confirmPsw(event : Event){
    this.disabled = !((<HTMLInputElement>event.target).value == this.signUpRequest.password)
  }

  @ViewChild('f',{static:true}) signUpForm!:NgForm;

  submit(form : NgForm){
    this.userService.signUp(this.signUpRequest).subscribe(() => {
      console.log(this.signUpRequest);

      this.userService.getUserByEmail(this.signUpRequest.email).subscribe((result:UserDto) =>{
        console.log(result.email);

        localStorage.setItem('user_email', (this.signUpRequest.email));

        this.router.navigate([""]);
      })
      });
  }

}
