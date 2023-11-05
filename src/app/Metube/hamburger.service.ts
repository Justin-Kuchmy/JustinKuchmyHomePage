import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
  constructor() { }
  private HamburgerIsActive = new BehaviorSubject<boolean>(false);
  HamburgerIsActive$ = this.HamburgerIsActive.asObservable();
  updateHamburgerIsActive(isActive: boolean)
  {
    this.HamburgerIsActive.next(isActive);
  }
}
