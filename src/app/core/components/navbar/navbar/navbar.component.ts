import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sideNavToggle = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  constructor(){}

  SideNavToggle()
  {
    this.menuStatus=!this.menuStatus;
    this.sideNavToggle.emit(this.menuStatus);
  }
 
}
