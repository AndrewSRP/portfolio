/**
 * Created by AndrewPark on 2017. 3. 6..
 */
import {
    Component, trigger, state, style, transition, animate, Input, Output, EventEmitter,
    OnInit
} from "@angular/core";
import {ConnectInfo} from "../../item/connectinfo/connectinfo";
import {ConnectInfoService} from "../../item/connectinfo/connectinfo.service";

declare var $ : any;

@Component({
    selector:'page-subform',
    templateUrl:'page-subform.component.html',
    styleUrls:['page-subform.component.css'],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                transform: 'scale(1)'
            })),
            state('active',   style({
                transform: 'scale(0)'
            })),
            transition('inactive => active', animate('300ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})

export class PageSubformComponent implements OnInit {
    errorMessage:string;
    hrManagerInfo: ConnectInfo;
    title = "제목";
    inputList = [
        {
          title:'Company',
          placeholder:'업체명을 알려주세요.',
            target:'company'
        }, {
            title:'Name',
            placeholder:'담당자님 성함을 알려주세요.',
            target:'name'
        },{
            title:'Email',
            placeholder:'담당자님 메일을 알려주세요.',
            target:'email'
        },{
            title:'Number',
            placeholder:'담당자님 연락처를 알려주세요.',
            target:'number'
        }
    ];
    textArea = {
      title: "Etc",
      placeholder:"말씀주세요.",
        target:'etc'
    };
    @Input() state;
    @Output() contact = new EventEmitter();
    display = true;
    open_contact = '보내기';

    constructor(private connectInfoService : ConnectInfoService) { }

    ngOnInit() {
        this.hrManagerInfo = new ConnectInfo();
    }

    onClose(){
        this.contact.next('active');
    }

    sendSheet() {
      this.ajax();

      // this.connectInfoService.postSheet(this.hrManagerInfo).subscribe(
      //     a => console.log(a),
      //     error => this.errorMessage = <any>error
      // );

      // this.connectInfoService.sendJsonp(this.hrManagerInfo);
    }

    ajax (){
        console.log(this.hrManagerInfo);
        $.ajax({
            // type을 설정합니다.
            type : 'POST',
            url : "https://script.google.com/macros/s/AKfycbxCSZBhrlLH3P_hNpyuL93uH4ZqKLDacNgJ_rwzYUZuiAygiOje/exec",
            // 사용자가 입력하여 id로 넘어온 값을 서버로 보냅니다.
            data : this.hrManagerInfo,
            // 성공적으로 값을 서버로 보냈을 경우 처리하는 코드입니다.
            success : function (data) {
                // 서버에서 Return된 값으로 중복 여부를 사용자에게 알려줍니다.
                console.log(data);
            }
        });
    }
}
