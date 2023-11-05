import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageHeaderComponent } from './layouts/page-header/page-header.component';
import { ButtonComponent } from './components/button/button.component';
import { CategoryPillsComponent } from './components/category-pills/category-pills.component';
import { VideoGridItemComponent } from './components/video-grid-item/video-grid-item.component';
import { VideoDurationPipe } from './utils/duration.pipe';
import { ViewFormatterPipe } from './utils/view-formatter.pipe';
import { SidebarComponent } from './components/small-side-bar/sidebar.component';
import { SmallSidebarItemComponent } from './components/small-side-bar/small-sidebar-item/small-sidebar-item.component';
import { SafeHtmlPipe } from './utils/safe-html.pipe';
import { LargeSidebarSectionComponent } from './components/large-sidebar-section/large-sidebar-section.component';
import { LargeSidebarItemComponent } from './components/large-sidebar-section/large-sidebar-item/large-sidebar-item.component';
import { MeTubeComponent } from './me-tube.component';


@NgModule({
  declarations: [
    MeTubeComponent,
    PageHeaderComponent,
    ButtonComponent,
    CategoryPillsComponent,
    VideoGridItemComponent,
    VideoDurationPipe,
    ViewFormatterPipe,
    SidebarComponent,
    SmallSidebarItemComponent,
    SafeHtmlPipe,
    LargeSidebarSectionComponent,
    LargeSidebarItemComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    PageHeaderComponent,
    CategoryPillsComponent,
    VideoGridItemComponent,
    SidebarComponent,

  ]
})
export class metubeModule { }
