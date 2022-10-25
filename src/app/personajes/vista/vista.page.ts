import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit {

  perfilId:number;
  character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient

  ) { }

  ngOnInit() {
    this.perfilId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
    this.http.get("http://localhost:3000/characters/" + this.perfilId)
    .subscribe(res => this.character = res);
  }

}
