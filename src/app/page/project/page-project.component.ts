/**
 * Created by AndrewPark on 2017. 2. 28..
 */
import {Component} from "@angular/core";
import {ItemPort} from "../../item/port/item-port";
@Component({
  selector:'page-project',
  templateUrl:'page-project.component.html',
  styleUrls:['page-project.component.css','../page.common.css']
})

export class PageProjectComponent{
  title = "많은 일들을 했습니다.";
  description = "Andrew는 강력한 Front-End 개발자 입니다.";
  portList:ItemPort[] = [
    {imgPath:'JandiMIS.png',bgColor:'#666',list:['AnguarJS2','Node.js','Postgresql']},
    {imgPath:'JandiResume.png',bgColor:'#888',list:['Javascript','jQuery','Bootstrap']},
    {imgPath:'JandiBlog.png',bgColor:'#aaa',list:['Wordpress','Mysql']},
    {imgPath:'JandiJira.png',bgColor:'#ccc',list:['Tomcat','Nginx']}
  ];
}
