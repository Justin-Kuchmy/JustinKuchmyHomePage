import { Component } from '@angular/core';
import { VideoGridItemProps } from './VideoGridItemProps';
import { categories, videos } from './components/data/home';

@Component({
  selector: 'app-me-tube',
  template: `
    <div class="max-h-screen flex flex-col">
      <app-page-header [HamburgerIsActive]="this.HamburgerActive" ></app-page-header>
      <div class="grid grid-cols-[auto,1fr] h-[1000px] flex-grow-1 overflow-auto">
        <div class="sidebar-container overflow-auto">
          <sidebar [HamburgerIsActive]="this.HamburgerActive" ></sidebar>
        </div>
        <div class="overflow-x-hidden px-8 pb-4">
          <div class="sticky top-0 bg-white z-10 pb-4">
            <category-pills [CategoryPillProps]="categories" [SelectedCategory]="selectedCategory"></category-pills>
          </div>
          <div class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            <VideoGridItem  *ngFor="let video of VideoData let i = index" [video]="video">
            </VideoGridItem>
          </div>
        </div>
      </div>
</div>

  `,
  styles: [
  ]
})
export class MeTubeComponent {
  title = 'MeTube';
  categories: string[] = categories;
  VideoData: VideoGridItemProps[] = videos;
  selectedCategory: string = "";
  HamburgerActive: boolean = false;
}
