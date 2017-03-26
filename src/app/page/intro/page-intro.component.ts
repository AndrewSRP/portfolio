/**
 * Created by AndrewPark on 2017. 2. 28..
 */
import {Component, Output, EventEmitter} from "@angular/core";
declare var $ : any;

@Component({
  selector:'page-intro',
  templateUrl:'page-intro.component.html',
  styleUrls:['page-intro.component.css','../page.common.css']
})

export class PageIntroComponent{
  introduce_myself = `안녕하세요.<br>저는 Andrew 입니다.`;
  open_contact = '연락처 남기기';
  more_lean = 'Andrew에 대해 좀 더 알아보기';

  @Output() contact = new EventEmitter();

  openContact(){
    this.contact.next('inactive');
  }

  moveTech(){
    $('html, body').stop().animate( { scrollTop : $('#tech').offset().top } );
  }
}
