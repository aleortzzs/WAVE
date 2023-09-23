import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-generos-card',
  templateUrl: './generos-card.component.html',
  styleUrls: ['./generos-card.component.css']
})
export class GenerosCardComponent {
  prevData: any;
  @Input() data:any={
    genres: []
  }

  onCheckboxChange(genre: string, event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked && !this.data.genres.includes(genre)) {
      this.data.genres.push(genre);
    } else if (!target.checked && this.data.genres.includes(genre)) {
      const index = this.data.genres.indexOf(genre);
      this.data.genres.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.prevData = JSON.parse(localStorage.getItem('signupData') || '{}')
   }
   session_localStorage(){
      localStorage.setItem('signupData',JSON.stringify(this.combineData()));
   }
   
   combineData(){
    const combineData={
      ...this.prevData,
      ...this.data
        };  
  return combineData;
   }

}
