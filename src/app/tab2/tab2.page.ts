import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  commic = [];
  apikey:string = `6a533dbd4bb2e56e387c33f094a7aed2`;
  limit:String = `10`;
  hash:string=`f42db002a81094eef1c6e236814da60b`;

  constructor( private http: HttpClient,
  ) {
    this.CargarComics();
  }

  CargarComics () {
    console.info('log');
    this.http.get(`https://gateway.marvel.com/v1/public/comics?limit=${this.limit}&apikey=${this.apikey}&ts=1&hash=${this.hash}`)
      .subscribe (data => {
        this.commic= <any>data['data']['results'];
        // console.info(this.commic['data']['results']);
        console.info(this.commic[0]);
      })
  }

}
