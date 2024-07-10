import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AddCourseRequest} from "../../model/AddCourseRequest";
import {CategoryService} from "../../services/CategoryService/category.service";
import {CategoryDto} from "../../model/CategoryDto";
import {NgForOf} from "@angular/common";
import {CourseService} from "../../services/CourseService/course.service";

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit{

  title : string = "Add a Course";
  categories : CategoryDto[];

  constructor(private categoryService : CategoryService, private courseService : CourseService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe((result:CategoryDto[]) => {
      console.log(result);
      this.categories = result;
    });
  }

  addCourseRequest : AddCourseRequest = new AddCourseRequest();

  submit() {
    console.log(this.addCourseRequest);
    this.courseService.add(this.addCourseRequest).subscribe(() => {
      console.log(this.addCourseRequest);
    })
  }
}
