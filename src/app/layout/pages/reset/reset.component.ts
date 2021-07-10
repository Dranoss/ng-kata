import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  birthDate = '';
  legalAgeCondition = 0;
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  saveBirthDate(): void{
    const myBirthDate = new Date(this.birthDate);
    this.checkLegalAge(myBirthDate);
  }

  checkLegalAge(birthDate: Date){
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
        age--;
      }
    if(age >= 18){
      this.counterService.counterReset();
      this.legalAgeCondition = 2;
    }
    if(age < 18){
      // alert("Vous devez être une grande personne pour être autorisé.e à supporter cette lourde responsabilité qu'est le reset du compteur.... Mangez la soupe de grand-mère puis veuillez réessayer.")
      this.legalAgeCondition = 1;
    }
  }
}
