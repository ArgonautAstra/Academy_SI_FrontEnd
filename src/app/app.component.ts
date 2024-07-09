import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {MainComponent} from "./main/main.component";
import {FooterComponent} from "./footer/footer.component";
import {UserService} from "../services/UserService/user.service";
import {UserDto} from "../model/UserDto";
import {CourseService} from "../services/CourseService/course.service";
import {CourseDto} from "../model/CourseDto";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MainComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'Academy-Project';

  email : string;

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.getAll().subscribe((result:UserDto[]) =>{
      console.log(result);
    })
  }

  onElementAdd($event: string) {
    this.email = $event;
  }
}
