import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { VideoGridItemProps } from '../../VideoGridItemProps';
import {formatTimeAgo} from '../../utils/formatTimeAgo';




@Component({
  selector: 'VideoGridItem',
  template: `
    <div class="relative flex flex-col gap-2"  (mouseenter)="toggleVideoPlayback(this.videoRef)" (mouseleave)="toggleVideoPlayback(this.videoRef)">
      <a #imageLink [href]="'/watch?v=' + video.id"  class="absolute top-0 left-0 w-full h-full z-10"></a>
      <img #imageDiv src={{video.thumbnailUrl}}  class=" z-0 block w-full h-full object-cover transition-[border-radius] duration-200 {{isVideoPlaying ? 'rounded-none' : 'rounded-xl'}}">
      <div class="absolute bottom-0 right-0 bg-secondary-dark text-secondary text-sm px-0.5 rounded">{{video.duration | videoDuration }}</div>

       <video
        class="absolute block h-full object-cover absolute inset-0 transition-opacity duration-200 hover:z-20 inset-0"
        [class.opacity-100]="isVideoPlaying"
        [class.opacity-0]="!isVideoPlaying"
        #videoRef
        playsinline
        [src]="video.videoUrl"
        controls
        class="absolute top-0 left-0 w-full h-full z-20 delay-200"></video>
    </div>
    <div class="flex gap-2">
      <a [href]="'/@' + video.channel.id" class="flex-shrink-0">
        <img class="w-12 h-12 rounded-full" [src]="video.channel.profileUrl" />
      </a>
      <div class="flex flex-col">
        <a [href]="'/watch?v=' + video.id" class="font-bold">
          {{ video.title }}
        </a>
        <a [href]="'/@' + video.channel.id" class="text-secondary-text text-sm">
          {{ video.channel.name }}
        </a>
        <div class="text-secondary-text text-sm">
          {{ video.views | viewFormatter }} Views &#183; {{ formatTimeAgo(video.postedAt) }}
        </div>
      </div>
    </div>

  `,  
  styles: [
  ]
})
export class VideoGridItemComponent implements OnInit {
  
  @Input() videoData!: VideoGridItemProps[];
  @Input() video: VideoGridItemProps = {
    id: '',
    title: '',
    channel: {
      id: '',
      name: '',
      profileUrl: ''
    },
    views: 0,
    postedAt: new Date,
    duration: 0,
    thumbnailUrl: '',
    videoUrl: ''
  };
  @ViewChild('imageDiv', { static: false }) imageDiv!: ElementRef;
  @ViewChild('imageLink', { static: false }) imageLink!: ElementRef;
  @ViewChild('videoRef', { static: false }) videoRef!: ElementRef;
  isVideoPlaying: boolean  = false;


  ngOnInit() {
    if (this.imageDiv && this.imageLink) {
      const imageElement: HTMLImageElement = this.imageDiv.nativeElement;
      const videoElement: HTMLVideoElement = this.videoRef.nativeElement;
      const linkElement: HTMLAnchorElement = this.imageLink.nativeElement;

      // Get the width and height of the image
      const width = imageElement.width;
      const height = imageElement.height;

      // Set the <a> tag's dimensions to match the image
      linkElement.style.width = `${width}px`;
      linkElement.style.height = `${height}px`;

      // Set the <video> tag's dimensions to match the image
      videoElement.style.width = `${width}px`;
      videoElement.style.height = `${height}px`;


    }
  }

  toggleVideoPlayback(videoElement: HTMLVideoElement) {
    this.isVideoPlaying = !this.isVideoPlaying;
    if(this.isVideoPlaying)
    {
      videoElement.currentTime = 0;
      videoElement.play();
      videoElement.muted = true;
    }
    else if(!this.isVideoPlaying)
    {
      videoElement.pause();
    }
  }

  formatTimeAgo(timestamp: Date): string {
    return formatTimeAgo(timestamp);
  }
}
