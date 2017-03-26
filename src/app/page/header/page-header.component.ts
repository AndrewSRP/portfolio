/**
 * Created by AndrewPark on 2017. 2. 28..
 */
import {
  Component, trigger, state, style, animate, transition
} from "@angular/core";

declare var $ : any;

@Component({
  selector:'page-header',
  templateUrl:'page-header.component.html',
  styleUrls:['page-header.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        transform: 'translateX(10px) scale(1)'
      })),
      state('active',   style({
        transform: 'translateX(100%) scale(1)'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})

export class PageHeaderComponent{
  state = 'active';
  menuList = [
      {title: '소개',link:'#intro'},
    {title: '기술',link:'#tech'},
    {title: '프로젝트',link:'#project'},
    {title: '고용하기',link:'#connect'},
  ];

  onOpen(){
    if(this.state == 'active'){
      this.state = 'inactive';
    }else{
      this.state = 'active';
    }
  }

  move(link){
    $('html, body').stop().animate( { scrollTop : $(link).offset().top } );
  }
}
