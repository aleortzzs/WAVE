import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-generos-card',
  templateUrl: './generos-card.component.html',
  styleUrls: ['./generos-card.component.css']
})
export class GenerosCardComponent {
  @Output() siguienteClick = new EventEmitter<void>();
  prevData: any;
  @Input() data:any={
    generos: []
  }

  onCheckboxChange(genre: string, event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked && !this.data.generos.includes(genre)) {
      this.data.generos.push(genre);
    } else if (!target.checked && this.data.generos.includes(genre)) {
      const index = this.data.genres.indexOf(genre);
      this.data.generos.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
   }
   session_localStorage(){
      localStorage.setItem('signupData',JSON.stringify(this.combineData()));
      this.siguienteClick.emit();
   }
   
   combineData(){
    const combineData={
      ...this.prevData,
      ...this.data
        };  
  return combineData;
   }

}
