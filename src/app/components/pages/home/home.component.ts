import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public title: String = "Sabujo";

  constructor(private http:HttpClient) {  }

  // getInfoIbge(): void {
  //   this.countrysData = this.http.get<Countrys[]>('https://servicodados.ibge.gov.br/api/v1/localidades/distritos');
  // }

  ngOnInit(): void {
  }

}
