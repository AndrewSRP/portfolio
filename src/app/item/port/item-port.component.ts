/**
 * Created by AndrewPark on 2017. 3. 4..
 */
import {Component, Input} from "@angular/core";
import {ItemPort} from "./item-port";
@Component({
  selector:'item-port',
  templateUrl:'item-port.component.html',
  styleUrls:['item-port.component.css']
})

export class ItemPortComponent{
  @Input() item:ItemPort;
  assetsPath = './assets/doneWork/'
}
