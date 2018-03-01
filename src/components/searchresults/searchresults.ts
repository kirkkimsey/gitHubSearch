import { Component, Input } from "@angular/core";
import { User } from "../../models/user.interface";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the SearchresultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-searchresults",
  templateUrl: "searchresults.html"
})
export class SearchresultsComponent {
  @Input() user: User;

  text: string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    console.log("Hello SearchresultsComponent Component");
    this.text = "Hello World";
  }
  profileSelect() {
    this.navCtrl.push("ProfilePage");
  }
}
