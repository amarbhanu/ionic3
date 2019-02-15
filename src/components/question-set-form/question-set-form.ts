import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';

import { Http } from '@angular/http';

//import {ProductDetailPage} from '../product-detail/product-detail';

//import { ProductProvider } from '../../providers/product/product';


/**
 * Generated class for the QuestionSetFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question-set-form',
  templateUrl: 'question-set-form.html'
})
export class QuestionSetFormComponent {

    data:any = {};

    text: string;

    items: any;
    public itemChecked;
    public log;

constructor(public navCtrl: NavController, public http: Http){
this.getItems();

 console.log('Hello QuestionSetFormComponent Component');
    this.text = 'Hello World';


        this.data.username = '';
        this.data.response = '';

        this.http = http;
 }


submit() {
        var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
        var myData = JSON.stringify({username: this.data.username});

        console.log(this.data);
        console.log("hello"+JSON.stringify(this.data.radioSelect.id));

        this.http.post(link, myData)
        .subscribe(data => {
          this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        }, error => {
            console.log("Oooops!");
        });
  }

getItems(){
    this.items = [
    { description: 'Item 1', id: 1, },
    { description: 'Item 2', id: 2, },
    { description: 'Item 3', id: 3, },
    { description: 'Item 4', id: 4, },
    { description: 'Item 5', id: 5, },
    { description: 'Item 6', id: 6, },
    ]
}

logForm(form){
    console.log(form.value)
}

select(item) {
    this.log = "SELECTED! " + item.description;
}




}
