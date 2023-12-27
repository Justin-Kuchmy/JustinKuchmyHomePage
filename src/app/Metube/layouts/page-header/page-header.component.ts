import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HamburgerService } from '../../hamburger.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styles: []
})
export class PageHeaderComponent implements OnInit {
  constructor(private service: HamburgerService, private httpClient: HttpClient){}
  @Input() HamburgerIsActive: boolean = false;
  showfullWidthSearch: boolean = false;
  hamburgerActive: boolean = false;
  @Output() HamburgerActive = new EventEmitter();
  ngOnInit(): void {
    this.service.HamburgerIsActive$.subscribe((value) => {
      this.HamburgerIsActive = value;
    })
  }
  toggleHamburger() {
    this.service.HamburgerIsActive$.subscribe((value) => {
      this.HamburgerIsActive = value;
   })
    this.HamburgerIsActive = !this.HamburgerIsActive;
    this.service.updateHamburgerIsActive(this.HamburgerIsActive);
  }
  showAlert(buttonName: String) {
    alert(`${buttonName} button Clicked!`);
  }
  hideStuff() {
    this.showfullWidthSearch = !this.showfullWidthSearch;
  }
}
