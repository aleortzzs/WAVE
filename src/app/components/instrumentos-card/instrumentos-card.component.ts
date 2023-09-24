import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrumentos-card',
  templateUrl: './instrumentos-card.component.html',
  styleUrls: ['./instrumentos-card.component.css']
})
export class InstrumentosCardComponent {
  constructor(private router: Router) {}
  prevData: any;
  @Input() data:any={
    instruments: []
  }
  onCheckboxChange(instrument: string, event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked && !this.data.instruments.includes(instrument)) {
      this.data.instruments.push(instrument);
    } else if (!target.checked && this.data.instruments.includes(instrument)) {
      const index = this.data.instruments.indexOf(instrument);
      this.data.instruments.splice(index, 1);
    }
  }
  ngOnInit(): void {
    this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
   }
   session_localStorage(){
      localStorage.setItem('signupData',JSON.stringify(this.combineData()));
      this.router.navigate(['/create-profile']);
   }
   
   combineData(){
    const combineData={
      ...this.prevData,
      ...this.data
        };  
  return combineData;
   }
}
