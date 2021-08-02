import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetails:any;
  usersId:any ="";
  // ********************  Desplaying Selected uerID   *************************
  SelectedUSer:any;

  myForm:any;
  msg ='';
  // ********************  Desplaying Sent Messages  *************************
  usertext:any = [];
  incomingMSg = "";

  comingmsg = false;
  // previousChat :any
  textmsgs : any;
  // ********************  active class property For AttachFiles icon  *************************
  selectedcol = "";
  // ********************  active class property for Footer Emoji icon  *********************** 
  selectedicon = "";
  // ********************  Hiding Emoji icons Div  ***********************
  emojiIcons = false;
  // ********************  Desplaying all icons  ***********************
  displayEmoji:any
  displayAnimals:any;
  displayEats:any;
  displayActivities:any;

  attachfiles = false;
  sendmessage = false;
  microphone = true;
  selectedcols = "";
  singletick =false;
  doubletick = false;
  checked =false;
  sentTime:any
  constructor(private userservice:DataserviceService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
// ************* Getting Emojis from service ***********
      this.displayEmoji = this.userservice.getEmojis()
      this.displayAnimals = this.userservice.getAnimals()
      this.displayEats = this.userservice.getEatings()
      this.displayActivities = this.userservice.getActivites()
// ************* Getting UserDetails From service ***********
      this.userDetails = this.userservice.gettigUserdata();
      this.activatedroute.params.subscribe((params:any)=>{
        this.usersId = params.id
        this.SelectedUSer = this.userDetails.find((ele:any)=>{
          return this.usersId == ele.id
        })
      //  this.previouschatt();
      });
      // this.funnn();
  }

  // previouschatt(){
    // let chatt:any = (localStorage.getItem(this.usersId));
    // this.previousChat = JSON.parse(chatt);
  // }
// funnn(){
//   for(let i=0;i<3;i++){
//     setTimeout(()=> console.log(i),2000)
//   }
// }

// ************** binding sending msg with property and desplaying ************
sendtext(Form:any){
    console.log(Form)
    if(Form == "hai"){
      this.incomingMSg = "hello"
    }
    if(Form == "hello"){
      this.incomingMSg = "hai"
    }
    if(Form == "how are you"){
      this.incomingMSg = "i am fine and you"
    }
    if(Form == "what is your name"){
      this.incomingMSg = "my name is mahesh"
    }
    if(Form == "what are you doing"){
      this.incomingMSg = "nothing"
    }
    this.usertext.push({msgs:this.msg});
    // localStorage.setItem(this.usersId,JSON.stringify(this.usertext))
      
    this.textmsgs = true
    this.msg = "";
    // this.previouschatt();
    // this.comingmsg = true
    setTimeout(() =>{ this.comingmsg = true}, 6000);
    setTimeout(() =>{ this.singletick = true}, 1000);
    setTimeout(() =>{ this.singletick = false, this.doubletick = true}, 2000);
    setTimeout(() =>{ this.doubletick =false, this.checked = true}, 4000);
    this.sentTime = new Date()
      
  }
  // ************** showing sent button **********
  showsend(){
    this.sendmessage =true;
    this.microphone = false
  }

  selectedLink(selected: any){
    if(this.attachfiles == false){
    // setTimeout(() =>{ this.attachfiles = true}, 500);
      this.attachfiles = true
    }else{
      this.attachfiles = false
    }
    if(this.selectedcol == ""){
      this.selectedcol = selected
    }else {
      this.selectedcol = ""
    }

  }
  selectedLinks(selected: any){
    
    if(this.selectedcols == ""){
      this.selectedcols = selected
    }else {
      this.selectedcols = ""
    }

  }
  selectedEmoji(selected: any){
    if(this.emojiIcons == false){
      // setTimeout(() =>{ this.attachfiles = true}, 500);
        this.emojiIcons = true
      }else{
        this.emojiIcons = false
      }
      if(this.selectedicon == ""){
        this.selectedicon = selected
      }else {
        this.selectedicon = ""
      }
  }
 
}
