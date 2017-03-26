/**
 * Created by AndrewPark on 2017. 3. 10..
 */
import {Component, Input} from "@angular/core";
import {ItemConnect} from "./item-connect";

@Component({
  selector:'item-connect',
  templateUrl:'item-connect.component.html',
  styleUrls:['item-connect.component.css']
})

export class ItemConnectComponent{
  @Input() item:ItemConnect;
}
