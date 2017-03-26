/**
 * Created by AndrewPark on 2017. 3. 7..
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response, URLSearchParams, Jsonp} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {ConnectInfo} from "./connectinfo";

@Injectable()
export class ConnectInfoService{
  private sheetURL2 = "https://script.google.com/macros/s/AKfycbxCSZBhrlLH3P_hNpyuL93uH4ZqKLDacNgJ_rwzYUZuiAygiOje/exec";
  private sheetURL = "https://script.google.com/macros/s/AKfycbzx9CSFjfMZQ9aYMa8_28TWpi23kRkXkSnuPW61pIVs/dev";

  constructor(private http: Http, private jsonp: Jsonp) { }

  sendJsonp(connectInfo:ConnectInfo){

    let params = new URLSearchParams();
    params.set('company',connectInfo.company );
    params.set('name',connectInfo.name );
    params.set('number',connectInfo.number );
    params.set('email',connectInfo.email );
    params.set('etc',connectInfo.etc );
    params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');

    console.log(this.sheetURL);
    // TODO: Add error handling
    return this.jsonp
        .get(this.sheetURL, { search: params })
        .map(response => console.log(response))
        .catch(this.handleError);
  }

  postSheet(connectInfo:ConnectInfo): Observable<any> {
    // let headers = new Headers({
    //   'Access-Control-Allow-Methods': "POST",
    //   "Access-Control-Max-Age": "3600",
    //   "Access-Control-Allow-Headers": "x-requested-with",
    //   "Access-Control-Allow-Origin": "*",
    //   'Content-Type': 'application/json'});
    let headers = new Headers();
    let options = new RequestOptions(
      { headers: headers }
    );
    return this.http.post(this.sheetURL, connectInfo, options).map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
