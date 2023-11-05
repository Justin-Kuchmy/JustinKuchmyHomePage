import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewFormatter'
})
export class ViewFormatterPipe implements PipeTransform {
  transform(value: number): string {
   if(value > 1000000000){return (value/1000000000).toFixed(1) + "B"}
   else if(value > 1000000){return (value/1000000).toFixed(1) + "M"}
   else if(value > 1000){return (value/1000).toFixed(1) + "K"}
   return value.toString();
  }
}
