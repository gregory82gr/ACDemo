import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  title = 'Parent calls an @ViewChild()';
  
  @ViewChild(ChildComponent, {static:true}) child: ChildComponent;
 
  increment() {
    this.child.increment();
  }
 
  decrement() {
    this.child.decrement();
  }
}
