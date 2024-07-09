import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AddCourseRequest} from "../../model/AddCourseRequest";

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent{

  title : string = "Add a Course";

  addCourseRequest : AddCourseRequest = new AddCourseRequest();

  submit(){
    console.log(this.addCourseRequest)
  }
}
