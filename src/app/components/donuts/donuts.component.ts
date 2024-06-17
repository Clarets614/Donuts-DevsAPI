import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { DonutModel } from '../../models/donutmodel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {

  constructor(private _donutsService:DonutsService){}

  donutsResult:DonutModel = {} as DonutModel;

  ngOnInit(){
    this.callAPI();
  }


  callAPI():void{
    this._donutsService.getDonut().subscribe((response:DonutModel) =>{
      console.log(response);
      this.donutsResult = response;
    })
  }


}
