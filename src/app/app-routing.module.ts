import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './Components/chat/chat.component';
import {HomeComponent} from './Components/home/home.component';
const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path:'chat/:id',
  component:ChatComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
