/**
 * Created by AndrewPark on 2017. 2. 28..
 */
import {Component, Output, EventEmitter} from "@angular/core";
import {ItemConnect} from "../../item/connect/item-connect";
@Component({
  selector:'page-connect',
  templateUrl:'page-connect.component.html',
  styleUrls:['page-connect.component.css','../page.common.css']
})

export class PageConnectComponent{
  open_contact = '연락처 남기기';
  hide_him = 'Andrew를 고용하고 싶나요?';
  profile = {
    imgPath : 'profile.jpg',
    description : `Andrew는 Full Stack Developer를 목표로 삼고 있습니다. 현재는 사용성 높은 강력한 웹 어플리케이션을 만들고자합니다.`
  };

  connectList:ItemConnect[] = [
    {
      icon:'ship',
      title:'Blog',
      path:''
    },{
      icon:'github-square',
      title:'Github',
      path:''
    },{
      icon:'linkedin-square',
      title:'Linkedin',
      path:''
    },{
      icon:'facebook-official',
      title:'Facebook',
      path:''
    },{
      icon:'envelope',
      title:'Email',
      path:''
    },
  ];

  @Output() contact = new EventEmitter();

  openContact(){
    this.contact.next('inactive');
  }
}
