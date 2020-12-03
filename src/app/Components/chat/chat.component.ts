import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { WebSocketService } from '../../Services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
  total=0;
  userChat={
    user:'',
    text:''
  }
 myMessages: any;

  eventName="send-message"
  constructor(private activated:ActivatedRoute,private webService:WebSocketService,private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    this.userChat.user=id;
//concecion con websocket
    this.webService.listen('text-event').subscribe((data:any)=>{
      this.myMessages=data;
    })

//peticion para obtener el numero de usurios conectados
    this.http.get<any>("http://Backend-env.eba-dgdetwtp.us-east-1.elasticbeanstalk.com/getTotalUsers").subscribe(data => {
console.log(data);
    this.total = data.total;
 
   },error => console.log("Error"));
  }


  myMessage(){
    //emite el mensaje al webSocket
    this.webService.emit(this.eventName,this.userChat);
    this.userChat.text=''
  }

}
