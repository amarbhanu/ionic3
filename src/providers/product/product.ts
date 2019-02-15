import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { Placeholder } from './placeholder.model';

//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/delay';


/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  getProducts(){
	  	//return this.http.get<any[]>('http://localhost/test/api/t1/data.json')

	    return this.http.get<any[]>('/assets/get-hindi.json').delay(50)

  }

  getProductsList(){
      //return this.http.get<any[]>('http://localhost/test/api/t1/data.json')

      return this.http.get<any[]>('/assets/get-hindi-list.json').delay(100)
  }


  
  getHotcareerList(){
      //return this.http.get<any[]>('http://localhost/test/api/t1/data.json')

      return this.http.get<any[]>('/assets/get-hot-career.json').delay(50)
  }



}
