import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
   socket:any;
   
  constructor() { 
 
    this.socket = io('http://Backend-env.eba-dgdetwtp.us-east-1.elasticbeanstalk.com');
  
  }

  listen(eventName:string){

    return new Observable((Subscriber) =>{
      this.socket.on(eventName,(data:any) => {
        Subscriber.next(data);
      })
    })
  }

emit(eventName:string,data:any){
  this.socket.emit(eventName,data);
}

}
