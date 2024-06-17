import { Component } from '@angular/core';
import { PeopleModel } from '../../models/peoplemodel';
import { FamouspeopleService } from '../../services/famouspeople.service';

@Component({
  selector: 'app-famous-people',
  standalone: true,
  imports: [],
  templateUrl: './famous-people.component.html',
  styleUrl: './famous-people.component.css'
})
export class FamousPeopleComponent {

  constructor(private _famouspeopleService:FamouspeopleService){}

  personResult:PeopleModel = {} as PeopleModel;

  ngOnInit(){
    this.callAPI();
  }
  
  callAPI():void{
    this._famouspeopleService.getPerson().subscribe((response:PeopleModel)=> {
      console.log(response);
      this.personResult = response;
    })
  }



}

