import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 


import { NgxBootstrapIconsModule, xCircle,playCircle, collectionPlay, clock, 
  people, collection, display, soundwave, search, musicPlayerFill, diagram3, sendFill, 
  back,
  translate,
  boundingBoxCircles,
  ear,
  share,
  pauseCircle,
  save,
  image,
  cameraReels,
  box,
  circle,
  stopCircle,
  cameraVideo,
  lightbulb,
  lightbulbOff,
  trash,
  chevronBarDown,
  layoutSplit,
  cardText,
  micMute,
  camera2,
  mic,
  cameraVideoOff,
  personVideo2,
  images,
  emojiSmile,
  personCircle,
  penFill,
  pinMap,
  person,
  telephoneOutbound,
  newspaper,
  musicNoteBeamed,
  handIndex,
  volumeUp,
  fullscreen,
  fullscreenExit,
  shop,
  chatSquareDots
} from 'ngx-bootstrap-icons';
const icons = {
xCircle,playCircle,collectionPlay,clock,people,collection,display,soundwave,search,musicPlayerFill,
diagram3,sendFill,back,translate,boundingBoxCircles,ear,pauseCircle,share,save,image,
cameraReels,box,circle,stopCircle,cameraVideo,lightbulb,lightbulbOff,trash,chevronBarDown,
layoutSplit,cardText,micMute,camera2,mic,cameraVideoOff,personVideo2,images,emojiSmile,personCircle,
penFill,pinMap,person,telephoneOutbound,newspaper,musicNoteBeamed,handIndex,volumeUp,fullscreen,fullscreenExit,
shop,chatSquareDots
};



import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgStreamingModule} from '@videogular/ngx-videogular/streaming';
import { MiliffynumberModule } from '../pipes/miliffynumber.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { SwipeModule } from 'ng-swipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { NgxColorsModule } from 'ngx-colors';


import { NgxDraggableDomModule } from "ngx-draggable-dom";

import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TimeagoModule } from "ngx-timeago";


import { NgxStarsModule } from 'ngx-stars';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LazyLoadImageModule,
    NgxBootstrapIconsModule.pick(icons),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    MiliffynumberModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 200,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#800000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      titleFontSize: '75',
   "showSubtitle": false,
   "titleColor": "#800000",
   
    }),
    SwipeModule,
    FontAwesomeModule, 
    NgxSliderModule,
    LeafletModule,
    NgxColorsModule,
    NgxDraggableDomModule,
    PickerComponent,
    IonicStorageModule.forRoot(),
    TimeagoModule.forRoot(),
    NgxStarsModule

  ],
  declarations: [HomePage],

  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomePageModule {}


