import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoDuration'
})
export class VideoDurationPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;
    
    const formattedHours = hours > 0 ? hours + ':' : '';
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    const formattedSeconds = (seconds < 10 ? '0' : '') + seconds;

    return formattedHours + formattedMinutes + ':' + formattedSeconds;
  }

}
