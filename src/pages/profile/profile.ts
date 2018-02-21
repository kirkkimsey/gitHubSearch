import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { User } from "../../models/user.interface";
import { USER_LIST } from "../../mocks/users";
/**

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  username: string;
  userProfile: User;
  users: User[] = USER_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ionViewDidLoad() {
    this.userProfile = this.users.find(user => this.username === user.name);
    console.log(this.userProfile);
  }
  ionViewWillLoad() {
    this.username = this.navParams.get("username");
    console.log(this.username);
  }
}
