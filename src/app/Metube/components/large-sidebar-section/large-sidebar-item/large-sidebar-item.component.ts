import { Component, Input, OnInit } from '@angular/core';
import { LargeSidebarItemProps } from '../../../LargeSidebarItemProps';
import { Icons, LooseObject } from '../../data/Icons'
import { subscriptions } from '../../data/sidebar';
import { SubscriptionsProp } from '../../../SubscriptionsProp';

@Component({
  selector: 'large-sidebar-item',
  template: `
      <!-- <h1 class="text-red-500">{{SideBarSectionTitle}}</h1> -->
      <custom-button [variant]="'ghost'" class="w-full flex items-center rounded-lg gap-4 p-3  {{this.isActive ? 'font-bold ng-neutral-100 hover:bg-secondary' : ''}}">
        <img *ngIf="this.SideBarSectionTitle === 'Subscription'" src="{{IconOrImgUrl}}" class="w-6 h-6 rounded-full">
        <div *ngIf="this.SideBarSectionTitle !== 'Subscription'" [innerHTML]="icons[IconOrImgUrl] | safeHtml"></div>
        <div [innerHtml]="title | safeHtml" class="whitespace-nowrap overflow-hidden text-ellipsis"></div>
      </custom-button>

  `,
  styles: [
  ]
})
export class LargeSidebarItemComponent implements OnInit {
  constructor(){}
  icons: LooseObject = Icons;
  subscriptionsData: SubscriptionsProp[] = subscriptions;
  isActive: boolean = false;
  @Input() SideBarSectionTitle: string = "''";
  @Input() IconOrImgUrl = "''";
  @Input() title = "''";
  @Input() url = "''";
  ngOnInit(): void {
    //console.log(this.IconOrImgUrl, " ", this.icons[this.IconOrImgUrl])
    // console.log(this.IconOrImgUrl)
    this.isActive = true;
  }

}
