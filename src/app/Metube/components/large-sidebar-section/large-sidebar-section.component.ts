import { Component, Input, OnInit } from '@angular/core';
import { LargeSidebarItemProps } from "../../LargeSidebarItemProps";
import { LargeSidebarSectionProps } from '../..//LargeSidebarSectionProps';
import { SubscriptionsProp } from '../..//SubscriptionsProp';
import { Icons, LooseObject } from '../data/Icons'
import { PlaylistProps } from '../../PlaylistProps';

@Component({
  selector: 'large-sidebar-section',
  template: `
    <h1 class="">{{title}}</h1>
    <div *ngIf="title !== 'Subscriptions'">
      <large-sidebar-item *ngFor="let item of SideBarSections.Children.slice(0, this.SideBarSections.visibleItemCount) let i = index" 
      [SideBarSectionTitle]="''"
      [IconOrImgUrl]="item.icon" 
      [title]="item.title" 
      [url]="item.url">
      </large-sidebar-item>
      </div>


    <div *ngIf="title === 'Subscriptions'">
      <large-sidebar-item  *ngFor="let item of SideBarSubscriptionSection.Children.slice(0, this.SideBarSubscriptionSection.visibleItemCount)" 
      [SideBarSectionTitle]="'Subscription'" 
      [title]="item.name" 
      [IconOrImgUrl]="item.image" 
      [url]="''">
      </large-sidebar-item>
    </div>

    <div *ngIf="this.SideBarSections.title !== 'main'">
        <large-sidebar-item
        [IconOrImgUrl]="ButtonIcon" 
        [title]="ShowOrHideString" 
        (click)="this.isExpanded?  HideItems(IdentifyType()) :  ShowItems(IdentifyType())"
        ></large-sidebar-item>
      </div>
    
    
  `,
  styles: [
  ]
})
export class LargeSidebarSectionComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor()
  {

  }
  CombinedArray: any[] = [];
  //clickedObject: LargeSidebarSectionProps = this.IdentifyType();
  @Input() title: string = "";
  @Input() SideBarSections: LargeSidebarSectionProps = {Children: []};
  @Input() SideBarSubscriptionSection: LargeSidebarSectionProps = {Children: []};
  @Input() playlists: PlaylistProps[] = [];
  icons: LooseObject = Icons;
  isExpanded: boolean = false;
  ButtonIcon: string = (this.isExpanded) ? 'Angleup' : 'Angledown';
  ShowOrHideString: string = (this.isExpanded) ? 'Hide' : 'Show More';
  tempSectionSize: number = 0;


  ShowItems(obj: LargeSidebarSectionProps): void{
    if(obj !== undefined)
    {
      this.tempSectionSize = obj.visibleItemCount as number;
      obj.visibleItemCount = Number.POSITIVE_INFINITY;
      this.isExpanded = true;
      this.ButtonIcon = 'Angleup';
      this.ShowOrHideString = "Hide"
    }

  }
  HideItems(obj: LargeSidebarSectionProps): void{
    if(obj !== undefined)
    {
      obj.visibleItemCount = this.tempSectionSize;
      this.isExpanded = false;
      this.ButtonIcon = 'Angledown';
      this.ShowOrHideString = "Show More";
    }

  }

  IdentifyType(): LargeSidebarSectionProps
  {
    if(this.SideBarSections.Children.length === 0)
        return this.SideBarSubscriptionSection;
    else return this.SideBarSections;
  }
}
