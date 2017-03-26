/**
 * Created by AndrewPark on 2017. 2. 28..
 */
import {Component, Input} from "@angular/core";
import {ItemCard} from "./item-card";
@Component({
  selector: 'item-card',
  templateUrl: 'item-card.component.html',
  styleUrls:['item-card.component.css']
})

export class ItemCardComponent{
  @Input() itemInfo:ItemCard;
}
