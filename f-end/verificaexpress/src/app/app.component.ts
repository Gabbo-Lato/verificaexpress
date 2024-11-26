

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
standalone:true
})
export class AppComponent implements OnInit{
  results: any[]=[];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
  
  this.http.get('http://localhost:3000/api/mante').subscribe((data: any) => {
  
  console.log(data);
  this.results = data.results;
  console.log(typeof this.results);
  }); }
  }
