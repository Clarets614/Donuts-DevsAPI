import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeopleModel } from '../models/peoplemodel';

@Injectable({
  providedIn: 'root'
})
export class FamouspeopleService {

  constructor(private http:HttpClient) { }

  getPerson(){
    return this.http.get<PeopleModel>(`https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json`)
  }


}
