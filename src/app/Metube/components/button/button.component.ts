import { Component, ElementRef, Renderer2 } from '@angular/core';
import {Input} from '@angular/core';

interface LooseObject {
  [key: string]: any
}

@Component({
  selector: 'custom-button',
  template: `
     <button [disabled]="buttonProps.disabled" [ngClass]="getButtonClasses()" >
     <ng-content></ng-content>
     </button>
     
  `,
  styles: [
  ]
})
export class ButtonComponent {
  constructor(private el: ElementRef) {
    this.variant = 'default';
    this.size = 'default';
    this.color = "default"
  }
  //@Input() buttonStyle: ButtonProps;
  @Input() variant: String = "";
  @Input() size: String = "";
  @Input() color: String = "";
  @Input() buttonProps: LooseObject = {};
  

  getButtonClasses() {
    
    const classes: LooseObject = {
      'bg-secondary': this.variant === 'default',
      'hover:bg-secondary:hover': this.variant === 'default',
      'hover:bg-gray-300': this.variant === 'default' || this.variant === 'ghost',

      'bg-secondary-dark': this.variant === 'dark',
      'hover:bg-secondary:hover-dark': this.variant === 'dark',
      'text-secondary': this.variant === 'dark',
      'hover:bg-gray-600': this.variant === 'dark',

      'rounded': this.size === 'default',
      'rounded-full': this.size === 'icon',
      'w-10': this.size === 'icon',
      'h-10': this.size === 'icon',
      'items-center': this.size === 'icon',
      'justify-center': this.size === 'icon',
      'p-2': this.size,     
    };
    this.el.nativeElement.classList.forEach((element: any) => {
      classes[element] = this.el.nativeElement.classList.contains(element);
    });
    return classes;
  }
}
