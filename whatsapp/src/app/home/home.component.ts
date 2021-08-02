import { Component, OnInit } from '@angular/core';
import { convertCompilerOptionsFromJson } from 'typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  header = false;
  footer =false;
  constructor() {  }
  
  
  ngOnInit(): void {
   
  }
  Header = setTimeout(() =>{ this.header = true}, 3000);
  Footer = setTimeout(() =>{ this.footer = true}, 2000);
  
}
