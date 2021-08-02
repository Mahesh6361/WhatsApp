import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header = false;
  notification = false;
  userDetails:any;

  newChat = false;
  myprofile = false;
selectedcols = "";
  constructor(private userservice:DataserviceService, private router:Router) { }
  
  Header = setTimeout(() =>{ this.header = true}, 2000);
  NotificationAlert = setTimeout(() =>{ this.notification = true}, 4000);
  NotificationAlert2 = setTimeout(()=>{ this.notification = false}, 20000)
  ngOnInit(): void {
    this.userDetails = this.userservice.gettigUserdata();
  }
  selectUser(id:any){
    this.router.navigate(['header',id]);
    console.log(id);
  }

  showContacts(){
    this.newChat = true;
  }
  hideContacts(){
    this.newChat = false;
  }
  showMyProfile(){
    this.myprofile = true;
  }
  hideMyProfile(){
    this.myprofile = false;
  }
  selectedLinks(selected: any){
    
    if(this.selectedcols == ""){
      this.selectedcols = selected
    }else {
      this.selectedcols = ""
    }

  }
}
