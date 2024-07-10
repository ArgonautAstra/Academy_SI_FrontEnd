import {Component, DoCheck, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  @Input()
  email : string;

  searchQuery : string = "";

  onUpdate(event : Event){

    this.searchQuery = (<HTMLInputElement>event.target).value;

    console.log(this.searchQuery);
  }

}
