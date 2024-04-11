import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  courses = [
    { id: 1, name: "Angular For Beginners" },
    { id: 2, name: "Angular Core Deep Dive" },
    { id: 3, name: "Angular Forms In Depth" },
  ];

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}

export class Course{
  id:string;
  name:string;
}
