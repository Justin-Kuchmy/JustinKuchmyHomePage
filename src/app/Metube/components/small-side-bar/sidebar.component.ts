import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SmallSidebarItemProps } from '../..//SmallSidebarItemProps';
import { LargeSidebarItemProps } from '../..//LargeSidebarItemProps';
import { MainIcons, SecondaryIcons, ExploreIcons} from '../data/home'

import { subscriptions, playlists } from '../data/sidebar'
import { LargeSidebarSectionProps } from '../../LargeSidebarSectionProps';
import { SubscriptionsProp } from '../..//SubscriptionsProp';
import { PlaylistProps } from '../..//PlaylistProps';
import { HamburgerService } from '../..//hamburger.service';



@Component({
  selector: 'sidebar',
  template: `

<div *ngIf="isSmallScreen" class="">
  <aside *ngIf="!HamburgerIsActive" class="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1">
    <small-sidebar-item *ngFor="let item of SmallIconsData" [SidebarItem]="item"></small-sidebar-item>
  </aside>
  
  <div  *ngIf="HamburgerIsActive" class="fixed z-[100] inset-0 bg-secondary-dark opacity-50 pointer-events-none" (click)="toggleHamburger()"></div>
    <aside *ngIf="HamburgerIsActive" class="w-56 absolute z-[999] top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-p px-4 py-2 lg:flex bg-white">
      <div class="gap-4 items-center flex flex-shrink-0">
            <custom-button [variant]="'ghost'" [size]="'icon'" (click)="toggleHamburger()" [buttonProps]="{disabled: false}">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                  </svg>
            </custom-button>
            <a href="/">
                <img src="../../../assets/MeTubeLogo.png" alt="logo" class="h-6">
            </a>
        </div>
        <large-sidebar-section [SideBarSections]="this.MainSection" [title]="''"></large-sidebar-section>
        <hr>
        <large-sidebar-section [SideBarSections]="SecondarySection" [title]="''" [playlists]="PlayLists"></large-sidebar-section>
        <hr>
        <large-sidebar-section [SideBarSubscriptionSection]="SubscriptionSection" [title]="'Subscriptions'"></large-sidebar-section>
        <hr>
        <large-sidebar-section [SideBarSections]="ExploreSection" [title]="'Explore'"></large-sidebar-section>
      </aside>
    </div>


  <div *ngIf="!isSmallScreen" class="">
  <aside *ngIf="HamburgerIsActive" class="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1">
        <small-sidebar-item *ngFor="let item of SmallIconsData" [SidebarItem]="item"></small-sidebar-item>
      </aside>
      <aside *ngIf="!HamburgerIsActive" class="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-p px-2 lg:flex">
        <large-sidebar-section [SideBarSections]="this.MainSection" [title]="''"></large-sidebar-section>
        <hr>
        <large-sidebar-section [SideBarSections]="SecondarySection" [title]="''" [playlists]="PlayLists"></large-sidebar-section>
        <hr>
        <large-sidebar-section [SideBarSubscriptionSection]="SubscriptionSection" [title]="'Subscriptions'"></large-sidebar-section>
        <hr>
        <large-sidebar-section [SideBarSections]="ExploreSection" [title]="'Explore'"></large-sidebar-section>
      </aside>
  </div>

  `,
  styles: [
  ]
})


export class SidebarComponent implements OnInit {

  
  constructor(private service: HamburgerService){}
  @Input() HamburgerIsActive: boolean = false;
  @Output() HamburgerActive = new EventEmitter();
  isSmallScreen: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth < 1025;
  }
  ngOnInit(): void {
    this.service.HamburgerIsActive$.subscribe((value) => {
      this.HamburgerIsActive = value;
    })
  }
  SmallIconsData: SmallSidebarItemProps[] = MainIcons;
  MainSectionIcons: LargeSidebarItemProps[] = MainIcons;
  SecondarySectionIcons: LargeSidebarItemProps[] = SecondaryIcons;
  SubscriptionSectionIcons: SubscriptionsProp[] = subscriptions;
  ExploreSectionIcons: LargeSidebarItemProps[] = ExploreIcons;
  PlayLists: PlaylistProps[] = playlists;

  toggleHamburger()
  {
    this.service.HamburgerIsActive$.subscribe((value) => {
       this.HamburgerIsActive = value;
    })
    this.HamburgerIsActive = !this.HamburgerIsActive;
    this.service.updateHamburgerIsActive(this.HamburgerIsActive);
  }


  combinedArray: any[] = [...this.SecondarySectionIcons, ...this.PlayLists];
  MainSection: LargeSidebarSectionProps = {
    Children: this.MainSectionIcons,
    title: 'main',
    visibleItemCount: 3
  }; 
  SecondarySection: LargeSidebarSectionProps = {
    Children: this.combinedArray,
    title: '',
    visibleItemCount: 4
  }; 

  SubscriptionSection: LargeSidebarSectionProps = {
    Children: this.SubscriptionSectionIcons,
    title: '',
    visibleItemCount: 5
  };
  ExploreSection: LargeSidebarSectionProps = {
    Children: this.ExploreSectionIcons,
    title: '',
    visibleItemCount: 5
  };

}
