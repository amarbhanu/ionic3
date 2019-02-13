import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {ProductDetailPage} from '../product-detail/product-detail';
import { ProductProvider } from '../../providers/product/product';


/**
 * Generated class for the HotcareerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotcareer',
  templateUrl: 'hotcareer.html',
})
export class HotcareerPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  public allProducts =[];

  constructor(public navCtrl: NavController, private productService : ProductProvider) {
  }

  ionViewCanEnter(){
    //boolean value
    //can enter a page??
    //permission check
    //fires every time page is navigated
  }
  ionViewDidLoad(){
    //fires all internal setup
    //one time heavy liftin
    //fires only onces
    this.productService.getProductsList()
      .subscribe((response) =>{this.allProducts = response});
    

  }


  goToProductDetailPage(product){

    this.navCtrl.push(ProductDetailPage, {
      productDetails: product

    })
  }
  ionViewWillEnter(){
    //signals the start of the transition to bring the page into view
    //fires every time
    //Refreshing data
  }
  ionViewDidEnter(){
    //100% active page
    //page in full view
    //finish all work
    //fires every time

  }
  ionViewCanLeave(){
    //can enter 
    //boolean value
    //user can leave or not??
    //fires every time

  }
  ionViewWillLeave(){
    //opst of will enter
    //remove the page form the view
    //prefetch data for next page
    //fires every time 

  }
  ionViewDidLeave(){
    //page no longer visibles
    //cancel all view update
    //fires every time

  }
  ionViewWillUnload(){
    //unloaded and removed page form memory
    //fires only onces and the page is destroyed


  }


}
