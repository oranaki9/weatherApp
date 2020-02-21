import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  openBackDrop = false;
  openSideNav = false;
  constructor() {}

  ngOnInit() {}
  openNavBar() {
    this.openBackDrop = true;
    this.openSideNav = true;
  }
  closeNavBar() {
    this.openBackDrop = false;
    this.openSideNav = false;
  }
}
