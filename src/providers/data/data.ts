import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  result: any;

  constructor(private http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  get_music(username) {
    return this.http.get('https://api.mixcloud.com/' + username + '/').map(
      result => this.result = result
    );
  }
}
