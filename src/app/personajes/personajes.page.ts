import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

url = "http://localhost:3000/characters"
characters = []

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.url)
    .subscribe(data=>{
      this.characters = data;
    })
  }

  
    
  

}
