import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {UserDto} from "../../model/UserDto";
import {UserService} from "../../services/UserService/user.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  username : string;

  searchQuery : string = "";

  private userService : UserService;

  constructor(userService : UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userService.getUserByEmail(localStorage.getItem("user_email")).subscribe((result:UserDto) =>{
      this.username = result.firstname + " " + result.lastname;
    })
  }

  onUpdate(){
    console.log(this.searchQuery);
  }

}
