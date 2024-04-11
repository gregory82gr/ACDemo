import { Component, computed, signal } from '@angular/core';
import { SignalServiceService } from '../signal-service.service';
@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  counter :number=0
  derivedCounter: number=0
  

  constructor( private signalService:SignalServiceService) {

    console.log(`counter value: ${this.signalService.counter()}`)
    console.log(`counter value: ${this.signalService.derivedCounter}`)
    
  }

  increment() {

    console.log(`Updating counter...`)

    this.signalService.incrementCounter();

  }
}
