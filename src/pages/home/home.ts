import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public music: any;
  public popular: any;
  public username: string = '';
  public noUserName: string;

  constructor(public navCtrl: NavController, private _data: DataProvider) {
  }

  get_music() {
    if(this.username === '') {
      this.noUserName = 'Please enter a user name…';
      this.music = '';
    } else {
      this.noUserName = '';
      this._data.get_music(this.username).subscribe(
        res => {
          this.music = res;
          console.log(res);
        },
        err => {
          this.noUserName = 'No user was found with that name.  Please try again';
          this.music = '';
        }
      );
    }
  }

  get_popular() {
    this._data.get_the_popular().subscribe(
      res => {
        this.popular = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
