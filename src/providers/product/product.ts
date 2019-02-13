import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

	    return this.http.get<any[]>('/assets/get-hindi.json')

  }

  getProductsList(){
      //return this.http.get<any[]>('http://localhost/test/api/t1/data.json')

      return this.http.get<any[]>('/assets/get-hindi-list.json')

  }

}
