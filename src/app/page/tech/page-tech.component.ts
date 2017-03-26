/**
 * Created by AndrewPark on 2017. 2. 28..
 */
import {Component} from "@angular/core";
import {ItemCard} from "../../item/card/item-card";
@Component({
  selector:'page-tech',
  templateUrl:'page-tech.component.html',
  styleUrls:['page-tech.component.css','../page.common.css']
})

export class PageTechComponent{
  title = "이것을 할 수 있습니다.";
  description = "Andrew는 강력한 Front-End 개발자 입니다.";
  tech_list:ItemCard[] = [
    {
      icon:'font',
      title:'Javascript',
      description:"Javascript 강력하게 이해하고 더 많이 이해하기 위해 노력하고 있습니다. 현재는 ES2016에 관심이 많습니다."
    },
    {
      icon:'server',
      title:'Node.js',
      description:"node.js를 이용하여 앱 서버를 개발할 수 있습니다. API는 RESTFull을 이용하여 API를 제작합니다."
    },
    {
      icon:'archive',
      title:'AngularJS2',
      description:"Google에서 만든 Front-end 주력 프레임워크입니다. 여러가지 프로젝트를 AngularJS2로 개발해보았습니다."
    },
    {
      icon:'magic',
      title:'UX/UI',
      description:"사용자 편의성에 관심이 많으며, 얼마나 사용자가 편하게 사용 할 수 있을지 많은 고민을 합니다."
    },
    {
      icon:'code',
      title:'Code',
      description:"Html 표준을 지키려고 노력하며, 클린 코드를 작성하려고 노력합니다."
    },
    {
      icon:'lightbulb-o',
      title:'Creative',
      description:"강력한 아이디어와 넘치는 창의성을 가지고 있습니다."
    }
  ]
}
