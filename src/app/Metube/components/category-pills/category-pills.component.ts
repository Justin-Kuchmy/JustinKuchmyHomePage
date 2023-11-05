import { Component, EventEmitter, Input, Output, ElementRef, ViewChild, OnInit } from '@angular/core';

import { categories } from '../../components/data/home';

@Component({
  selector: 'category-pills',
  template: `
    <div #containerRef class="overflow-x-hidden overflow-y-hidden relative">
      <div class="flex whitespace-nowrap gap-3 transition-transform w-[max-content]" 
      [style.transform]="'translateX(' + this.translate + 'px)'" >
        <custom-button *ngFor="let item of CategoryPillProps let i = index" 
        (click)="onSelect(item)" [variant]="SelectedCategory === item ? 'dark' : 'default'" 
        class="py-1 px-3 rounded-lg">{{item}}</custom-button>
      </div>
      <div *ngIf="isLeftVisible" (click)="setTranslateLeft(this.translate)" class="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
        <custom-button [variant]="'ghost'" [size]="'icon'" class="h-full aspect-square w-auto p-1.5">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
        </svg>
        </custom-button>
      </div>
      <div *ngIf="isRightVisible" (click)="setTranslateRight(this.translate)" class="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
        <custom-button [variant]="'ghost'" [size]="'icon'" class="h-full aspect-square w-auto p-1.5">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
        </svg>
        </custom-button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CategoryPillsComponent{

  @Input() CategoryPillProps: string[] = categories;
  @Input() SelectedCategory: string = this.CategoryPillProps[0];
  @Output() OnSelect = new EventEmitter();
  isLeftVisible: boolean = false;
  isRightVisible: boolean = true;
  TRANSLATE_AMOUNT: number = 200;
  translate: number = 0;
  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef;

  onSelect(category: string)
  {
    this.SelectedCategory = category;
  }
  setTranslateLeft(translate: number)
  {
    let newTranslate = translate + this.TRANSLATE_AMOUNT;
    if(newTranslate > 0) 
    {
      newTranslate = 0;
    }
    this.translate = newTranslate;
    console.log("left: ", this.translate)
    this.test();
  }
  setTranslateRight(translate: number)
  {
    const containerWidth  = this.containerRef.nativeElement.scrollWidth;
    const screenWidth = this.containerRef.nativeElement.offsetWidth;
    let newTranslate = translate - this.TRANSLATE_AMOUNT;
    if(newTranslate + screenWidth >= containerWidth) 
    {
      this.translate  = containerWidth - screenWidth;
    }
    else
    {
      this.translate = newTranslate;
      //console.log("right: ", this.translate, " and this.containerWidth: ", (0-this.containerWidth+this.screenWidth))
      if(this.translate <= (0-(containerWidth-screenWidth)))
      {
        this.translate = (0-(containerWidth-screenWidth));
        
        
      }
    }
    this.test();
    
  }
  test()
  {
    const containerWidth  = this.containerRef.nativeElement.scrollWidth;
    const screenWidth = this.containerRef.nativeElement.offsetWidth;
    let maxTranslate = containerWidth-screenWidth;
    (this.translate >= 0) ? this.isLeftVisible = false : this.isLeftVisible = true;
    this.translate <= (0-maxTranslate) ? this.isRightVisible = false : this.isRightVisible = true;
  }
}
