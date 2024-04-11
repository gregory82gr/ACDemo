import { Component,OnInit, effect } from '@angular/core';
import { SignalServiceService } from '../signal-service.service';

@Component({
  selector: 'app-signal-receiver',
  templateUrl: './signal-receiver.component.html',
  styleUrl: './signal-receiver.component.css'
})
export class SignalReceiverComponent implements OnInit {

  currentCount:number=0;
  derivedCounter:number=0;
  constructor( private signalService:SignalServiceService) {
    const effectRef =effect((onCleanup) => {

      // We just have to use the source signals 
      // somewhere inside this effect
      this.currentCount = this.signalService.counter();
    
      this.derivedCounter = this.signalService.derivedCounter();
    
      console.log(`From Effect -current values: ${this.currentCount} 
        ${this.derivedCounter}`);
        onCleanup(() => {
          console.log("Perform cleanup action here");
        });
    
    },
    {
            manualCleanup: true
    });
    // we can manually destroy the effect 
    // at any time
    //effectRef.destroy();
  }

  ngOnInit(): void {
    
  }

  

  
}
