import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { User } from "../../models/user.interface";
import { USER_LIST } from "../../mocks/users";
/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-results",
  templateUrl: "results.html"
})
export class ResultsPage {
  username: string;
  userProfile: User;
  users: User[] = USER_LIST;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    console.log(this.users);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get("username");
    console.log(this.username);
  }
  ionViewDidLoad() {
    this.userProfile = this.users.find(user => this.username === user.name);
    console.log(this.userProfile);
  }
  profileSelect() {
    this.navCtrl.push("ProfilePage", { username: this.username });
  }
}
