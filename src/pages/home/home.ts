import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = "MainPage";
  tab2Root = "NewsPage";
  tab3Root = "VideoHotPage";
  tab4Root = "CategoriesPage";
  myIndex: number;
  constructor(public navCtrl: NavController) {

  }

}
