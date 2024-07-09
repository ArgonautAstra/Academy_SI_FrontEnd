import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchQuery : string = "";

  @Input()
  email : string;

  onUpdate(event : Event){

    this.searchQuery = (<HTMLInputElement>event.target).value;

    console.log(this.searchQuery);
  }

}
