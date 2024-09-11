import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';

import copy from 'copy-text-to-clipboard';

import Hls from 'hls.js';

import 'hls.js/dist/hls.js'

import * as under from 'underscore'
import { GestureController, IonInfiniteScroll, IonInput, IonMenu, IonRange, IonTextarea, Platform } from '@ionic/angular';
import { VgApiService } from '@videogular/ngx-videogular/core';

//@ts-ignore
import  * as  spotify from 'spotify-web-api-node';


import AudioMotionAnalyzer from 'audiomotion-analyzer';


import { GoogleGenerativeAI }  from "@google/generative-ai";

import { TextToSpeech } from '@capacitor-community/text-to-speech';

import  * as  isocode from 'iso-639-1';


//@ts-ignore
import  * as  drawBuffer from 'draw-wave';

import { base64ToBlob, blobToBase64 } from 'base64-blob'
import { DomSanitizer } from '@angular/platform-browser';


import  * as  formatduration from 'format-duration';



import getBlobDuration from 'get-blob-duration'

import {
  FileSharer
} from '@byteowls/capacitor-filesharer';
import { Socket } from 'ngx-socket-io';

import { Share } from '@capacitor/share';







import { NativeSettings, AndroidSettings, IOSSettings } from 'capacitor-native-settings';





import * as THREE from 'three';



import { DragControls } from 'three/examples/jsm/controls/DragControls';

import { InteractionManager } from 'three.interactive';

//@ts-ignore
import particleFire from 'three-particle-fire';

particleFire.install( { THREE: THREE } );
import { faCapsules, faSquare,faFire,faBox,faMusic,faImage,faCamera,faCameraRetro,faMapPin,faImages ,
faCircleDot,faRoadBarrier,faArrowRightToBracket,faArrowLeft,faLocationPin,faShare,faBell,faArrowRight,
faRobot
} from '@fortawesome/free-solid-svg-icons';

//@ts-ignore
import * as randomColor from 'randomcolor';

import { Options } from '@angular-slider/ngx-slider';


import { Camera, CameraResultType } from '@capacitor/camera';
import   {  latLng, tileLayer , Map, CircleMarker, map, circleMarker} from 'leaflet';

import { Geolocation } from '@capacitor/geolocation';

import { NativeGeocoder } from '@capgo/nativegeocoder';



import { StatusBar } from '@capacitor/status-bar';




import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import {GlitchPass  } from 'three/examples/jsm/postprocessing/GlitchPass';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
import { HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass'

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader';

import { Water } from 'three/examples/jsm/objects/Water';


//@ts-ignore
import {Text} from 'troika-three-text'


//@ts-ignore
import { ParticleGeometry } from 'three-particle-geometry';


import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';


//@ts-ignore
import * as MediaRecorderex  from 'media-recorder-js';

//@ts-ignore
import * as Recorder  from 'media-recorder-stream';

import {
  applyMediaStreamConstraints,
  getMediaStream,
  getMediaStreamConstraints,
  stopMediaStream,
  getWebcamSnapshot
} from '@webcam/core';


import tsWhammy from 'ts-whammy'
import { timer } from 'rxjs';




//@ts-ignore
import { v4 as uuidv4 } from 'uuid';


import { Storage } from '@ionic/storage-angular';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


import * as QRCodeStyling  from 'qr-code-styling';



import * as dobToAge from 'age-calculator'

//@ts-ignore
import dateFormat, { masks } from "dateformat";


import { genderOptions } from 'gender-options';

import * as generateVideoThumbnails from '@rajesh896/video-thumbnails-generator'



import fixWebmDuration from 'webm-duration-fix';


import { Network } from '@capacitor/network';

//@ts-ignore
import * as gifshot from 'gifshot'




import { CameraPreview } from '@capacitor-community/camera-preview';
import { VgTimeDisplayComponent } from '@videogular/ngx-videogular/controls';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage implements OnInit {


  faSquare = faSquare
  faFire = faFire
  faBox = faBox
  faMusic = faMusic
  faImage = faImage
  faCamera = faCamera
  faCameraRetro  = faCameraRetro
  faMapPin = faMapPin
  faImages = faImages
  faCircleDot = faCircleDot
  faRoadBarrier = faRoadBarrier
  faArrowRightToBracket = faArrowRightToBracket
  faArrowLeft= faArrowLeft
  faArrowRight= faArrowRight
  faLocationPin =  faLocationPin
  faShare = faShare
  faBell = faBell
  faRobot = faRobot

 // urlserver = 'http://localhost:3000';
 urlserver  = 'https://assadiq13.onrender.com'
  activeindexslide = 0;
  pages = ['Recent','Trends','Populaire'];
  categoriesnews :any = ['business','sports','world','politics','technology',
    'startup','entertainment','miscellaneous','science','automobile'
  ];

  animeinfo :any  = ''
  currentStreamplaying:any  = ''
  currentStreamplayingrecived:any  = ''
  showhandindex = true;

  listofrecentanimes:any  = [];
  listofpopularanime:any  = [];

  listofvideoqualities:any  = [];
  listoftrendanime:any  = [];
  
  listoftvshow :any  = [];
  listofsubtitles:any  = [];

  listofmovies:any  = [];
  listofmoviestrends:any  = [];





  @Input() swiperConfig?: SwiperOptions ={
    'direction':'horizontal',



}




@Input() swiperConfigvertical?: SwiperOptions ={
  'direction':'vertical',

}


  @ViewChild('swiperhome') swiperhome!: ElementRef<SwiperContainer>;
  @ViewChild('swiperhomevertical') swiperhomevertical!: ElementRef<SwiperContainer>;
  @ViewChild('swiperhomeimages') swiperhomeimages!: ElementRef<SwiperContainer>;

  @ViewChild('menuel') menuel!: IonMenu;
  @ViewChild('inputpriceproduct') inputpriceproduct!: IonInput;

  
  @ViewChild('videoplayerel') videoplayerel!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoplayerelrecived') videoplayerelrecived!: any;
  @ViewChild('textareavideomeassage') textareavideomeassage!: IonInput;
  @ViewChild('videoplayereltrack') videoplayereltrack!: any;

  
  modalinfoanimeopen = false;

  showspinnerwaitinganimeinfo = false;

  showplayervideo = false

  showspinnerwaitingforvideotoplay = false;

  playercurrenttime = 0;

                  
  showspinnerhome = false;

  infinitescrollstarting = false;

  movieorserieinfo : any;

  modalinfoamovieopen = false;


  videosubtitleschoosed = '';

  videosubtitleschoosedrecived: any = ''

  videoplayervg : any 
  videoplayervgrecived: any 
  private currentOffset: number = 0;
  private lastOnStart: number = 0;
  private DOUBLE_CLICK_THRESHOLD: number = 500;


  globalspotify : spotify = new spotify()


  listofnewspotifyreleasealbum  : any = [];
  listofnews: any = [];

  listoftracks  : any = [];

  listofrelatedartist : any = [];
  showmodaltrackmp3= false;

  audiomotion: any;

  globaltracksimage = '';
  globaltracksimageposter = ''

  listoflongsong : any = [];

  listofanimesearched : any = [];

  listofmoviesseriessearched : any = [];



  listofaihelp : any = [];
   


  openmodallongmusic = false;


  openmodalsearchanime = false;

  openodalsearchmoviesseries = false;
  openmodaltexttospeech = false;


  stateofhelp = 'text';

  texttranslated = ''


  listofcodeslang: any = [];
  listoflangtospeak: any = [];

  languagechoosedtotranslateto = 'en';

  languagechoosedtospeaktext = 'en-US';


  textspeaking = false;

  isAlertcopiedtextOpen = false;

  showdivplayingaudio = false;

  

  audioplayingpercentage = 0;

  duratioaudioai = '0';
currenttimeaudioai = '0'
globalaudioaigen: any

audioaiplaying = false;

showspinnerwaitingresponseai = false;


openmodalimagetotextai =false;

imagetotextairesult : any = [];

videorecordingstart = false;

globalmediarecorder  : any;
videorecordingstartbyuser = false;
globalstream  : any


globalscenethree = new THREE.Scene();

globalinteractionManager :any = null;

globalfireparticles :any = null
globalthreecontoldrag:any = null



faCapsules = faCapsules;

openmodalmeshedit = false;

globalobjectselected :any;

lightblubcamera = false;


showmodalaudioaddtovideo = false;

globalobjectthreecontroller:any;


objectstomove :any = [];




optionssliderverical: Options = {
  floor: 1,
  ceil: 10,
  vertical: true

};


optionssliderhorisontal: Options = {
  floor: 1,
  ceil: 10,
  vertical: false

};

valuesliderscalex = 1

valuesliderscaley = 1

globalcanvassteam  : any;


showvideorecordedbuttonsdiv = false;


showmodalmap = false;

optionsmap = {
	layers: [
		tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution: '...' })
	],
	zoom: 5,
	center: latLng(0, 0)
};

showspinnerwaitingmap = false;


globalmap : any

globalmarkmap = new CircleMarker(latLng(0,0),{
  'radius':20,
  'color':'#800'
})


addressonmap = '';
globalcamerathree : any;



minimiseplayer = false;

socketstate = false;


showcanvassnapshot = false;


globalrendererthree : any;

globalstreamaudio : any;
globaltexturevideo: any;

texturevideorepeated = false;
showdivaddtexttoscene = false;


colorpicker = '#ffffff';


globalrain : any;

globalcomposer: any;

globalshaderpass: any;

globalglitcheffect: any;

globalbloompass: any;
halftoonpassglobal: any;

globalaudioapicontext: any
globalaudiostreammusic: any;
audiouserstreamenabled = true;


videouserstreamenabled = true;


slidevertical = false;


listofvideorecived  : any = [];


videoblobtosend : any;
videoplayingsrc: any;
activeindexslidevertical = 0;


videoplayingsrctype : any;



videorecivedplaying: any = ''
videorecivedplayingposter: any = ''

indexofplayingvideorecived = 0;


showemojidiv = false;

userid = '';


userconnectedlist: any = [];
listofnotificationsrecived:any  = [];

socketconnectedfirsttime = false;

videoreciveduserid : any = '';
userprofileimage: any = '';

showmodaluserprofile = false;
showmodaleditnameuser = false;


username = '';
userdescription = '';
userage = 0;
userbirthday = new Date().toISOString();
usergender = 'Female';
userPhoneNumber = '';
useraddress = '';



opentoastsaved = false;
openphoneditmodal = false

listofgender : any  = [];

userADDRESS = false;

coordinateonmap  : any= null


listofsubtitlesrecived  : any = [];


activeindexslidestring = '0';


videorecivedplayingdescription = '';
videorecivedplayingmap: any = []
gotocordinnate = false;
opentoastsent = false;


showmodaluserconnected = false;


showmodaluserclicked = false;


userclickeddata : any;



listofuservideos: any = [];
vibrationstate = true;


videolocalsrc: any
showvideolocaldiv = false;

categoriesofnewschoosed = 'business';
inputsearchlongmusicvalue = ''
showmodaluservideos = false;


userblobimage: any;


showimageviewerdiv = false;
imagetoviewfull: any;


audiousermusicenabled=true;

lastvolumeaudiorecording = 1;
opentoastnointernet = false;
progressuploadingfile = 0;
showprogressupladingfile = false;

showspinnerwitingvideorecivedtoplay = false;


showdivrecordingaudio = false;

globalwaveaudio: any;


listofmessagevideoprive : any = []
listofmessagevideopublic : any = []
showmodalnotifications = false;
showmodaltrackmp3relatedartist = false

sectionnotificationchoosed = 'prive';

 @ViewChild('rangetimervideorecivedvalue') rangetimervideorecivedvalue!: IonRange;

videorecivedduration: any = 0;

showvideorecivedfull = true;


addmusictovideorecording = false;

showcamerprivewdiv = false;

sendimagegif = false;


videolocalsrcposter = '';


litofimagesuploded : any = [];



showmodalimagesuploded = true;


showmodalcommentproduct = false;
productidtocomment = ''



ratingDisplayproduct: number = 0;


listofcomments: any   = [];


showtogglelocationuser = true;

currentuserlocation: any  = [0,0]

  constructor
  (
    private http: HttpClient,
    private gestureCtrl: GestureController,
    private sanitizer:DomSanitizer,
    private socket: Socket,
    private storage: Storage,
    private platform: Platform,
    
  ) {

  }

  ngOnInit(): void {
    


    this.fetchrecentanime();


    this.setspotifytoken()


    this.registersocketevents()



    this.storage.create().then(() =>{ 

    this.storage.get('userprofileimage').then((userimage) =>{ 
    if(userimage){ 
this.userblobimage = userimage;
this.userprofileimage =  URL.createObjectURL(userimage)
}

  })


  this.storage.get('username').then((username) =>{ 
    if(username){ 
    this.username = username
      }
    })

    
  this.storage.get('userdescription').then((userdescription) =>{ 
    if(userdescription){ 
    this.userdescription = userdescription
      }
    })


    this.storage.get('userage').then((userage) =>{ 
      if(userage){ 
      this.userage = userage[0];
      this.userbirthday =  userage[1];
        }
      })


      this.storage.get('usergender').then((usergender) =>{ 
        if(usergender){ 
        this.usergender = usergender;
       
          }
        })

       
        this.storage.get('userPhoneNumber').then((userPhoneNumber) =>{ 
          if(userPhoneNumber){ 
          this.userPhoneNumber = userPhoneNumber;
         
            }
          })


          this.storage.get('useraddress').then((useraddress) =>{ 
            if(useraddress){ 
            this.useraddress = useraddress;
           
              }
            })
  

       
  this.storage.get('listofuservideos').then((listofuservideos) =>{ 
    if(listofuservideos){ 
    this.listofuservideos = listofuservideos;
   
      }
    })   


})
Network.addListener('networkStatusChange',(changed) =>{ 
  if(!changed.connected){
this.opentoastnointernet = true;
}
}).then((changed) =>{ 

Network.getStatus().then((status) =>{ 
  console.log(status);

})
})



this.http.get(this.urlserver + '/videoslive',{
  'responseType':'json'
}).subscribe((data: any ) =>{ 
  console.log(data);
  if(data){ 



  this.listofvideorecived.push(
    {
     video:data.url,
     country:data.country,
     description:data.name,
     type:'hls',
   }
   )
  }

})






  }

  ngAfterViewInit(): void {
    Object.assign(this.swiperhome.nativeElement, this.swiperConfig);

    this.swiperhome.nativeElement.initialize();
    this.swiperhome.nativeElement.addEventListener('swiperslidechange', (evt: any ) => this.slideChange(evt));

    Object.assign(this.swiperhomevertical.nativeElement, this.swiperConfigvertical);

    this.swiperhomevertical.nativeElement.initialize();
    this.swiperhomevertical.nativeElement.addEventListener('swiperslidechange', (evt:any ) => {
      console.log(evt);
      evt.stopPropagation();
      this.slideChangevertical(evt)
    });

    
    
    



  }


  doubleclickvideorec(){

}


onWillDismissimageuploded(ev : any){
this.showmodalimagesuploded = false;

}
  
  slideChangevertical(ev : any){

    this.activeindexslidevertical = ev['detail'][0]['activeIndex'] 

this.slidevertical = true
console.log(this.activeindexslidevertical);

if(this.videoplayerelrecived){
  if(this.listofvideorecived[this.activeindexslidevertical]){

var video : any = this.videoplayerelrecived.nativeElement;
   let type = this.listofvideorecived[this.activeindexslidevertical]['type']
   let videoSrc = this.listofvideorecived[this.activeindexslidevertical]['video']



if (type === 'hls') {
this.showspinnerwitingvideorecivedtoplay = true;
   if (Hls.isSupported()) {

  //var hls = new Hls();
  //hls.loadSource(videoSrc);
  //hls.attachMedia(video);

  video.oncanplay = (c: any ) =>{ 
    
    video.play();
this.showspinnerwitingvideorecivedtoplay = false;
console.log(this.videorecivedduration);

}


video.onwaiting = (c: any ) =>{ 
  this.showspinnerwaitingforvideotoplay = true;
}


video.onplaying = (c: any ) =>{ 
  this.showspinnerwaitingforvideotoplay = false;
}
}

}else{ 
video.src = videoSrc;
video.oncanplay = (c: any ) =>{ 
  
  video.play();
  console.log(this.videorecivedduration);


}

  }
}








}


this.http.get(this.urlserver + '/videoslive',{
  'responseType':'json'
}).subscribe((data: any ) =>{ 
  console.log(data);
  if(data){ 



  this.listofvideorecived.push(
    {
     video:data.url,
     country:data.country,
     description:data.name,
     type:'hls',
   }
   )
  }

})

this.http.get(this.urlserver + '/videohlsurl',{
  'responseType':'json'
}).subscribe((data: any ) =>{ 
  console.log(data);
  if(data){ 



  this.listofvideorecived.push(
    {
     video:data.url,
     type:data.type,
    time:data.time ? data.time : 0,
    subtitle:data.subtitle,
    poster:data.poster,
   }
   )
  }

})







this.showhandindex = false;

this.listofvideorecived = this.listofvideorecived.slice(-10 )
this.videosubtitleschoosedrecived = ''
}

  playervideogularready(ev:VgApiService ) {
   this.videoplayervg = ev;

if (this.videoplayerelrecived) {
   const gesture = this.gestureCtrl.create({
    el:this.videoplayerelrecived.nativeElement ,
    threshold: 0,
    onStart: () => this.doubleclickvideorec(),
    gestureName: 'double-click',
   
  });

  gesture.enable();
  this.videoplayerelrecived.nativeElement.onplaying = (c: any ) =>{ 
   this.showspinnerwitingvideorecivedtoplay = false
  }

  this.videoplayerelrecived.nativeElement.oncanplay = (c: any ) =>{ 
    this.showspinnerwitingvideorecivedtoplay = false
   }

   this.videoplayerelrecived.nativeElement.onwaiting = (c: any ) =>{ 
    console.log('waiting.........')
    this.showspinnerwitingvideorecivedtoplay = true
   }
  }
 
}


playervideogularreadyvideolocal(ev:VgApiService ) {
  console.log(ev)
  
 
 
}


deletevideofromstorage(item:any,i:any){
  console.log(this.listofuservideos)
  this.listofuservideos.splice(i, 1);
  console.log(this.listofuservideos)
  this.storage.set('listofuservideos',this.listofuservideos)

}

playervideogularreadyvideorecived(ev:VgApiService ) {



}




private doubleclickvideovideorecived() {
console.log('doubleclickvideovideorecived')
this.pauseplayvideoplayerrecived()
}

  private doubleclickvideo() {
    const now = Date.now();

    if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
      this.videoplayervg.fsAPI.toggleFullscreen()
      this.lastOnStart = 0;
    } else {
      this.lastOnStart = now;
    }
  if (this.videoplayervg.fsAPI.isFullscreen) {
    StatusBar.hide();
  
  }else{
    StatusBar.show();

}
this.minimiseplayer = false
}

togglesocketonoff(ev: any,menu: IonMenu){


  if (ev['detail']['checked']) {
    this.socket.connect();
  }else{
  
    this.socket.disconnect();

}
menu.close()

}


togglevibrationchanged(ev: any){


  this.vibrationstate = ev['detail']['checked']
  


}


segmentChangedpage(ev: any,menu: IonMenu){
  let s: any  = this.swiperhome.nativeElement
 
  s.swiper.slideTo(Number(ev['detail']['value']));
  menu.close()
this.minimiseplayer = true;
}


  fetchuplodedimages(){
    this.showspinnerhome = true;

this.http.get(this.urlserver+ '/searchuploadimages',{
  'responseType':'json'
}).subscribe((data: any ) =>{ 
  console.log(data);
  if(data.length > 0 ){ 
    let d = data['images'].splice(0,10)
 
this.litofimagesuploded = d;

  }
  this.showspinnerhome = false;

})

}


  slideChange(ev : any){

   // if(!this.slidevertical){

this.showhandindex = false;
    this.activeindexslide = ev['detail'][0]['activeIndex'];
    this.activeindexslidestring = ev['detail'][0]['activeIndex'].toString();

  console.log(ev['detail'][0]['activeIndex']);


switch (ev['detail'][0]['activeIndex']) {

  case 1:
    if (this.litofimagesuploded.length === 0) {
      this.fetchuplodedimages()

    }
    break;

  case 3:
    if (this.listofrecentanimes.length === 0) {
      this.fetchrecentanime()

    }
    break;

    
    case 4:
      if (this.listoftrendanime.length === 0) {
        this.fetchtrendanime()
  
      }
      break;

    case 5:
      if (this.listofpopularanime.length === 0) {
        this.fetchpopularanime()
  
      }
      break;


        case 6:
          if (this.listoftvshow.length === 0) {
            this.fetchtvshow()
      
          }
          break;

          
        case 7:
          if (this.listofmovies.length === 0) {
            this.fetchmovies()
      
          }
          break;

          case 8:
            if (this.listofmoviestrends.length === 0) {
              this.fetchmoviestrends()
        
            }
            break;

            case 9:
              if (this.listofnewspotifyreleasealbum.length === 0) {
                this.getnewreleasespotify()
          
              }
              break;

              case 10:
                if (this.listofnews.length === 0) {
                  this.getnews()
            
                }
                break;

  default:
    break;
}
 // }
  this.slidevertical = false
this.showvideolocaldiv = false;

}





  fetchtvshow(){
    this.showspinnerhome = true;
    this.http.get(this.urlserver + '/latestmovies/tv',{
      'responseType':'json'
    }).subscribe((data: any ) =>{ 
      
if(data){

this.listoftvshow = data
     

  }
  this.showspinnerhome = false;
      })
    }


    fetchmovies(){
      this.showspinnerhome = true;
      this.http.get(this.urlserver + '/latestmovies/movie',{
        'responseType':'json'
      }).subscribe((data: any ) =>{ 
       
  if(data){
  
  this.listofmovies = data
       
  
    }
    this.showspinnerhome = false;
        })
      }



      selectcategorieofnews(ev: any){
      console.log(ev)

this.categoriesofnewschoosed = ev['detail']['value']
this.getnews()

      }


      getnews(){
        this.showspinnerhome = true;
        this.http.get(this.urlserver + '/news/' + this.categoriesofnewschoosed ,{
          'responseType':'json'
        }).subscribe((data: any ) =>{ 
      
    if(data){
    let d = under.pluck(data,'news_obj')
      console.log(d[0])


    this.listofnews = d
         
    
      }
      this.showspinnerhome = false;
          })
        }

      fetchmoviestrends(){
        this.showspinnerhome = true;
        this.http.get(this.urlserver + '/latestmovies/trends',{
          'responseType':'json'
        }).subscribe((data: any ) =>{ 
      
    if(data){
    
    this.listofmoviestrends = data
         
    
      }
      this.showspinnerhome = false;
          })
        }
  

    fetchtvshowormovieinfo(id:any){
      this.modalinfoamovieopen = true;
      this.showspinnerwaitinganimeinfo = true;
   

      this.http.post(this.urlserver + '/movieorserieinfo',{
        'id':id
      },{
        'responseType':'json'
      }).subscribe((data: any ) =>{ 
      
  if(data){

  this.movieorserieinfo = data
       
      
    }
    const element : any = document.querySelector("#modalinfomovieseriesfirstdivid");
    if(element){    
element.scrollIntoView();
}
    this.showspinnerwaitinganimeinfo = false;
        })
      }
  
      fetchmovieseriessrc(id:any,mediaid:any){
        this.modalinfoamovieopen = false;
        this.showplayervideo = true;
 this.videosubtitleschoosed = ''
        this.showspinnerwaitingforvideotoplay = true;
  this.openodalsearchmoviesseries = false;
  this.globaltracksimageposter = ''
  this.listoftracks = [];
  this.listoflongsong = [];
  this.minimiseplayer = false;
        this.http.post(this.urlserver + '/episodemovieorserie',{
          'id':id,
          'mediaid':mediaid,

        },{
          'responseType':'json'
        }).subscribe((data: any ) =>{ 
          
         
    if(data){
   
let d = data.sources.reverse().slice(1)


      var video : any = this.videoplayerel.nativeElement;
   
      var videoSrc = d[0].url;
      this.videoplayingsrc = videoSrc
      this.videoplayingsrctype = 'hls'

      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        video.oncanplay = (c: any ) =>{ 
          
          video.play();
          this.showspinnerwaitingforvideotoplay = false;
          let videoel : any = this.videoplayerel.nativeElement;
          let canvaeldiv : any = document.querySelector("#canvaeldivid");
          if(!this.audiomotion){ 
          const audioMotion = new AudioMotionAnalyzer(
            canvaeldiv,
            {
              source: videoel,
              'colorMode':'bar-level',
              'overlay':true,
              'showScaleX':false,
              showBgColor: false
            }
          );
          audioMotion.start()
          this.audiomotion = audioMotion
        }
        this.showplayervideo = true;

      }


      video.onwaiting = (c: any ) =>{ 
        this.showspinnerwaitingforvideotoplay = true;
      }

      
      video.onplay = (c: any ) =>{ 
        this.showspinnerwaitingforvideotoplay = false;
      }
    }
    this.listofvideoqualities = d
    this.listofsubtitles = data.subtiles;
    if(data.subtiles){
      if(data.subtiles[0]){
    this.videosubtitleschoosed = data.subtiles[0].url
      }
    }  
      }

      this.showspinnerwaitinganimeinfo = false;
          })
        }
    


  fetchrecentanime(){
    this.showspinnerhome = true;
    this.http.get(this.urlserver + '/recentanime',{
      'responseType':'json'
    }).subscribe((data: any ) =>{ 
   
if(data){
if(data.results){

      this.listofrecentanimes = data.results
    }
  }
  this.showspinnerhome = false;
      })
    }

    loadrecentanimescroll(ev : any,infiniteel : IonInfiniteScroll){
   
     
  

      this.http.get(this.urlserver + '/recentanimerandom',{
        'responseType':'json'
      }).subscribe((data: any ) =>{ 
       
  if(data){
  if(data.results){
  let d = under.union([this.listofrecentanimes,data.results])
  d = under.flatten(d)

      this.listofrecentanimes = d
      infiniteel.disabled = true;
        
      }
    }
   
        })

    }
  

    loadpopulaireanimescroll(ev : any,infiniteel : IonInfiniteScroll){
      
     
  

      this.http.get(this.urlserver + '/popularanimerandom',{
        'responseType':'json'
      }).subscribe((data: any ) =>{ 
       
  if(data){
  if(data.results){
  let d = under.union([this.listofpopularanime,data.results])
  d = under.flatten(d)

      this.listofpopularanime = d
      infiniteel.disabled = true;
        
      }
    }
   
        })

    }
  



    fetchanimeinfo(id: any){
    
      
this.modalinfoanimeopen = true
this.showspinnerwaitinganimeinfo = true;

      this.http.post(this.urlserver + '/animeinfo',{
        id:id
      },{
        'responseType':'json'
      }).subscribe((data: any ) =>{ 
      
  if(data){
    this.animeinfo = data
this.modalinfoanimeopen = true;
this.showspinnerwaitinganimeinfo = false;

    }
    const element : any = document.querySelector("#modalinfofirstdivid");
    if(element){    
element.scrollIntoView();
}
        })
      }

      fetchanimeinfometa(id: any){
      
        this.modalinfoanimeopen = true
        this.showspinnerwaitinganimeinfo = true;
        
              this.http.post(this.urlserver + '/getanimeinfometa',{
                id:id
              },{
                'responseType':'json'
              }).subscribe((data: any ) =>{ 
             
          if(data){
            this.animeinfo = data
        this.modalinfoanimeopen = true;
        this.showspinnerwaitinganimeinfo = false;
        
            }
                })

                const element : any = document.querySelector("#modalinfofirstdivid");
                if(element){    
element.scrollIntoView();
}
              }


      fetchanimeinfowithoutmodal(id: any){
      
      
        this.showspinnerwaitinganimeinfo = true;
        
              this.http.post(this.urlserver + '/animeinfo',{
                id:id
              },{
                'responseType':'json'
              }).subscribe((data: any ) =>{ 
               
          if(data){
            this.animeinfo = data

        this.showspinnerwaitinganimeinfo = false;
        
            }
                })
              }
        

    fetchpopularanime(){
      this.showspinnerhome = true;
      this.http.get(this.urlserver + '/popularanime',{
        'responseType':'json'
      }).subscribe((data: any ) =>{ 
       
  if(data){
  if(data.results){
  
        this.listofpopularanime = data.results
      }
    }
    this.showspinnerhome = false;
        })
      }


      fetchtrendanime(){
        this.showspinnerhome = true;
        this.http.get(this.urlserver + '/trendanime',{
          'responseType':'json'
        }).subscribe((data: any ) =>{ 
          
    if(data){
    if(data.results){
    
          this.listoftrendanime = data.results
        }
      }
      this.showspinnerhome = false;
          })
        }
  
        selectsubtitlesofvideo(ev: any){

this.videosubtitleschoosed = ev['detail'].value
        }


        selectsubtitlesofvideorecived(ev: any){
console.log(ev)
this.videosubtitleschoosedrecived = this.sanitizer.bypassSecurityTrustResourceUrl( ev['detail'].value)
                  }
  


      fetchepisodeanimesrc(id  : any){
     
        this.showplayervideo = true;
        this.modalinfoanimeopen = false;
        this.showspinnerwaitingforvideotoplay = true;
        this.videosubtitleschoosed = '';
        this.openmodalsearchanime = false;
  this.globaltracksimageposter = ''
  this.listoftracks = [];
  this.listoflongsong = [];
  this.minimiseplayer = false;

        this.http.post(this.urlserver + '/episodeanimesrc',{
          id:id
        },{
          'responseType':'json'
        }).subscribe((data: any ) =>{ 
         
    if(data){

      var video : any = this.videoplayerel.nativeElement;
      var videoSrc = data.sources[0].url;
      this.videoplayingsrc = videoSrc
      this.videoplayingsrctype = 'hls'

      this.listofsubtitles = [];
      if (Hls.isSupported()) {
        var hls = new Hls({
       
        });
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        video.oncanplay = (c: any ) =>{ 
         
          video.play();
          this.showspinnerwaitingforvideotoplay = false;

          let videoel : any = this.videoplayerel.nativeElement;
          let canvaeldiv : any = document.querySelector("#canvaeldivid");
          if(!this.audiomotion){ 
          const audioMotion = new AudioMotionAnalyzer(
            canvaeldiv,
            {
              source: videoel,
              'colorMode':'bar-level',
              'overlay':true,
              'showScaleX':false,
              showBgColor: false

            }
          );
          audioMotion.start()
          this.audiomotion = audioMotion
        }else{
      
      }
        this.showplayervideo = true;

      }

      video.onwaiting = (c: any ) =>{ 
        this.showspinnerwaitingforvideotoplay = true;
      }

      
      video.onplay = (c: any ) =>{ 
        this.showspinnerwaitingforvideotoplay = false;
      }


    }
    this.listofvideoqualities = data.sources
      }
          })

      };


      
      selectqualityofplayer(ev  : any){
      
        var video : any = this.videoplayerel.nativeElement;
        this.playercurrenttime = video.currentTime
       

        this.showplayervideo = true;
        this.modalinfoanimeopen = false;
        this.showspinnerwaitingforvideotoplay = true;
 
         
    if(ev['detail']){
  this.videosubtitleschoosed = ''
    
      var videoSrc = ev['detail'].value;
     
      this.videoplayingsrc = videoSrc
      this.videoplayingsrctype = 'hls'

      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
       // video.oncanplay = (c: any ) =>{ 
        
          video.currentTime = this.playercurrenttime
          video.play();
          this.showspinnerwaitingforvideotoplay = false;



     // }
    }
    
      }
      

      };

      pauseplayvideoplayerrecived( ){
       
        console.log('doubleclickvideovideorecived')

        var video : any = this.videoplayerelrecived;
        if (video.nativeElement.paused) {
          video.nativeElement.play()
      }else{
        video.nativeElement.pause()
    }



  
    };



      pauseplayvideoplayer( ){
        if (!this.videorecordingstart) {

        var video : any = this.videoplayerel.nativeElement;
        if (video.paused) {
          video.play();
          this.minimiseplayer = false;
      }else{
        video.pause()
    }
  }

    };


copytexttoclipboard(text : any,target : any ){
  const el: any  = document.getElementById(target)
  copy(text,{
    'target':el
  });
  this.isAlertcopiedtextOpen = true;
};


exitvideoplayer(){
  var video : any = this.videoplayerel.nativeElement;
  video.pause();
this.showplayervideo = false;
if (this.videoplayervg) {
if (this.videoplayervg.fsAPI) {
  if (this.videoplayervg.fsAPI.isFullscreen) {

  this.videoplayervg.fsAPI.toggleFullscreen()
}
}
}

this.stoprecordingvideo()
this.showvideorecordedbuttonsdiv = false;
this.videorecordingstart = false;

this.videouserstreamenabled = true;
this.audiouserstreamenabled = true;
this.menuel.disabled = false;
this.showvideorecordedbuttonsdiv = false;
};
      onWillDismissanimeinfog(ev : any ){
        this.modalinfoanimeopen = false;
        this.modalinfoamovieopen= false;
        this.showmodaltrackmp3= false;
     
      };

      onWillDismissrelatedartist(ev : any ){
   
        this.showmodaltrackmp3relatedartist= false;
      };


      onWillDismisslongmusic(ev : any ){
        this.openmodallongmusic = false;
        this.openmodalsearchanime = false;
        this.openodalsearchmoviesseries = false;
        this.openmodaltexttospeech = false;
        this.openmodalimagetotextai = false;

        TextToSpeech.stop();
        this.textspeaking = false;
      };
      onWillDismissmeshedit(ev : any ){
        this.openmodalmeshedit = false;
        this.showmodalaudioaddtovideo = false;

      };

    trackloopangular(index : number, course: any) {
      return course ? course.id : undefined;
  };


  setspotifytoken(){
let s =new spotify()

fetch("https://accounts.spotify.com/api/token", {
  body: "grant_type=client_credentials&client_id=d1f3117491fb4812b73efbe1002b927b&client_secret=9d24e1e936ec4807a9cf2a246a589c54",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
}).then(data => {

return data.json()
}).then(data => {
  
s.setAccessToken(data.access_token);
this.globalspotify = s;


})
}

getnewreleasespotifybycountry(country : any){


  }


getnewreleasespotify(){
  this.showspinnerhome = true;
console.log('music 8');

this.globalspotify.getNewReleases({
  'limit':50
}).then(data => {
 
this.listofnewspotifyreleasealbum = data.body.albums.items;
this.showspinnerhome = false;

}).catch(err => {
this.setspotifytoken();
this.showspinnerhome = false;


})

}


getnewreleasespotifytracks(id : any,image : any){
  this.showspinnerwaitinganimeinfo = true;
  this.showmodaltrackmp3 = true;

    this.globalspotify.getAlbumTracks(id).then(tracks => {

  this.listoftracks = tracks.body.items;
  this.globaltracksimage = image
  this.globaltracksimageposter = image

  this.showmodaltrackmp3 = true;
  this.globalspotify.getArtistRelatedArtists(tracks.body.items[0].artists[0].id).then(related => {
  
    this.listofrelatedartist = related.body.artists;
  this.showspinnerwaitinganimeinfo = false;

  })
}).catch(err => {
  this.setspotifytoken();
  
  
  })
  }


  getrelatedartist(id : any){
  
   

  this.showspinnerwaitinganimeinfo =true

 

  this.showmodaltrackmp3relatedartist = true;
  this.globalspotify.getArtistRelatedArtists(id).then(related => {
    
    this.listofrelatedartist = []
//this.listoftracks = [];

    this.listofrelatedartist = related.body.artists
    this.showmodaltrackmp3relatedartist = true;
    this.showspinnerwaitinganimeinfo =false

}).catch(err => {
  this.setspotifytoken();
  this.showmodaltrackmp3relatedartist = false;
  this.showspinnerwaitinganimeinfo =true
  
  
  })
  }

  searchartist(query : any){
    this.showmodaltrackmp3relatedartist = false;
    this.showmodaltrackmp3 = true;
  this.globalspotify.getArtistTopTracks(query,'').then(tracks => {
    
    this.showmodaltrackmp3relatedartist = false;
    this.showmodaltrackmp3 = true;
    
  


    const element : any = document.querySelector("#modalmp3trackfirstdivid");
    if(element){    
element.scrollIntoView();
}
this.listoftracks = tracks.body.tracks;
  }).catch(err => {
    this.setspotifytoken();
    
    
    })

  }

  listentotrack(item: any,poster: any){

if(this.videorecordingstart){
  let video : any = document.querySelector('#videotextureid')
this.globaltracksimageposter = '';
         
  var videoSrc = item;
video.src = videoSrc
    video.oncanplay = (c: any ) =>{ 
     
      video.play();
    

  

  }
}else{
this.showmodaltrackmp3 = false;
this.openmodallongmusic = false;
this.showplayervideo = true;
this.videosubtitleschoosed = ''
this.showspinnerwaitingforvideotoplay = true;
this.globaltracksimageposter = poster;
this.minimiseplayer = false
  this.animeinfo = [];
  this.movieorserieinfo = [];

            var video : any = this.videoplayerel.nativeElement;
         
            var videoSrc = item;
      this.videoplayingsrc = videoSrc
      this.videoplayingsrctype = 'music'


          video.src = videoSrc
              video.oncanplay = (c: any ) =>{ 
               
                video.play();
                this.showspinnerwaitingforvideotoplay = false;
        
                let videoel : any = this.videoplayerel.nativeElement;
                let canvaeldiv : any = document.querySelector("#canvaeldivid");
                if(!this.audiomotion){ 
                const audioMotion = new AudioMotionAnalyzer(
                  canvaeldiv,
                  {
                    source: videoel,
                    'colorMode':'bar-level',
                    'overlay':true,
              'showScaleX':false,
              showBgColor: false

                  }
                );
                audioMotion.start()
                this.audiomotion = audioMotion
              }  
              this.showplayervideo = true;
        
            }
            video.onwaiting = (c: any ) =>{ 
              this.showspinnerwaitingforvideotoplay = true;
            }
      
            
            video.onplay = (c: any ) =>{ 
              this.showspinnerwaitingforvideotoplay = false;
            }
        
     this.listofvideoqualities = [];
     this.listofsubtitles = [];
            
  }

}

  searchlongmusic(item: any){

    this.openmodallongmusic = true;
    this.showspinnerwaitinganimeinfo = true;
    this.inputsearchlongmusicvalue = item.artists[0]. name + ' ' + item.name
    this.http.post(this.urlserver + '/searchlongmusic',{
      'text':item.artists[0]. name + ' ' + item.name
    },{
      'responseType':'json'
    }).subscribe((data: any ) =>{ 
     
if(data){
this.listoflongsong = data;
this.openmodallongmusic = true;
this.showspinnerwaitinganimeinfo = false;
}
})
  }



  searchmusic(inputsearchmusicel: any){
    if(inputsearchmusicel.value?.toLocaleString().length > 0){
      this.showspinnerhome = true;
      this.globalspotify.search(inputsearchmusicel.value,['track'],{
        'limit':50
      }).then(search => {
        

        this.listoftracks = search.body.tracks?.items;

      
        this.showmodaltrackmp3 = true;

        this.showspinnerhome = false;
      
       
      
      })
  }
}


searchanimerecent(input: any){
  this.openmodalsearchanime = true;

  if(input.value?.toLocaleString().length > 0){
    this.showspinnerwaitinganimeinfo = true;
    this.http.post(this.urlserver + '/searchanime',{
      text:input.value
    },{
      'responseType':'json'
    }).subscribe((data: any ) =>{ 
     
if(data){



  this.listofanimesearched = data.results;

  this.openmodalsearchanime = true;
  this.showspinnerwaitinganimeinfo = false;


}
})

}else{ 
  
  this.http.get(this.urlserver + '/recentanimerandom',{
    'responseType':'json'
  }).subscribe((data: any ) =>{ 
   
if(data){
  this.listofanimesearched = data.results;


  this.openmodalsearchanime = true;
  this.showspinnerwaitinganimeinfo = false;

}
})

}

}



searchmovieseries(input: any){

  if(input.value?.toLocaleString().length > 0){
    this.showspinnerwaitinganimeinfo = true;
  this.openodalsearchmoviesseries = true;

    this.http.post(this.urlserver + '/searchmovie',{
      text:input.value
    },{
      'responseType':'json'
    }).subscribe((data: any ) =>{ 
     
if(data){



  this.listofmoviesseriessearched = data.results;




}
this.showspinnerwaitinganimeinfo = false
})


  
 

}

}



changetypeofhelp(ev: any,imputchatai: any){
  console.log(ev);
  this.stateofhelp = ev['detail']['value']
  imputchatai.value = imputchatai.value.slice(0,200)
}


generataihelp(input: any){
  console.log(input);
  if(input.value.length > 0 ){
    this.showspinnerwaitingresponseai = true;
 switch (this.stateofhelp) {
  case 'text':
    const genAI = new GoogleGenerativeAI('AIzaSyCgQQC7gdEsVaN4nFJIOs0jEcfHjQB2-vU');

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
model.generateContent(input.value).then(text => {

this.listofaihelp.push({
  type:'text',
  text:text.response.text(),
});
this.showspinnerwaitingresponseai = false;
const element : any = document.querySelector("#divlastchataiid");
if(element){    
element.scrollIntoView();
}

}).catch(err => {
  this.showspinnerwaitingresponseai = false;
});
    break;

    case 'image':

    this.http.post(this.urlserver + '/imageai',{
      'text':input.value
    },{
      'responseType':'json'
    }).subscribe((data: any ) =>{ 
     
if(data){
  if(data.images){
  this.listofaihelp.push({
    type:'image',
    image:data.images[0],
  })
}
const element : any = document.querySelector("#divlastchataiid");
if(element){    
element.scrollIntoView();
}
}
this.showspinnerwaitingresponseai = false;
},err=>{
this.showspinnerwaitingresponseai = false;

} )
      break;


      
    case 'audio':

    this.http.post(this.urlserver + '/texttospeechmp3',{
      'text':input.value
      .slice(0,200)
    },{
      'responseType':'json'
    }).subscribe((data: any ) =>{ 
 
     
      
if(data){
  if(data.url){
    const audioContext = new AudioContext();
    base64ToBlob("data:audio/wav;base64,"+  data.url).then(blob => {
     

      blob.arrayBuffer().then(buffer => {
        audioContext.decodeAudioData(buffer, (audioBuffer) => {
    
          // Do something with audioBuffer
    
         
        var waveSVG : SVGSVGElement= drawBuffer.svg(audioBuffer,  window.innerWidth,75, '#800000');
    
      this.listofaihelp.push({
        type:'audio',
        audio:blob,
        svg:this.sanitizer.bypassSecurityTrustHtml(waveSVG.outerHTML),

      })
      const element : any = document.querySelector("#divlastchataiid");
if(element){    
element.scrollIntoView();
}
    })

  })
})


}
}
this.showspinnerwaitingresponseai = false;

},err=>{
  this.showspinnerwaitingresponseai = false;
  
  })
      break;
 
  default:
    break;
 }
}
}



imageaichanged(ev : any,input: any){
  const genAI = new GoogleGenerativeAI('AIzaSyCgQQC7gdEsVaN4nFJIOs0jEcfHjQB2-vU');

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  if(ev.target){
    if(ev.target.files){
      if(ev.target.files[0]){
        this.showspinnerwaitingresponseai = true;
blobToBase64(ev.target.files[0]).then(b64=> { 
  const image = {
    inlineData: {
      data:b64.split(',')[1],
      mimeType: "image/png",
    },
  };
  model.generateContent(['', image]).then(result=> {
   
    this.imagetotextairesult = [URL.createObjectURL(ev.target.files[0]),result.response.text()]
    this.openmodalimagetotextai = true
    this.showspinnerwaitingresponseai = false
}).catch(err=> {
  this.showspinnerwaitingresponseai = false

});
});


}
}
}

}



translatetext(text : any){
  this.openmodaltexttospeech = true;
 
  this.texttranslated = text



}


translatetext1(){
  this.openmodaltexttospeech = true;
  this.showspinnerwaitinganimeinfo = true;

  this.http.post(this.urlserver + '/translatetext',{
    'text':this.texttranslated,
    'lang':this.languagechoosedtotranslateto,

  },{
    'responseType':'json'
  }).subscribe((data: any ) =>{ 

if(data){
this.texttranslated = data.text
}
this.showspinnerwaitinganimeinfo = false;

})


}



onwillPresentmodaltexttranslate(ev: any){
  if(this.listoflangtospeak.length === 0){
TextToSpeech.getSupportedLanguages().then(supportedlanguage=> {  

this.listoflangtospeak = supportedlanguage.languages
})
}
if(this.listofcodeslang.length === 0){
let langcodes = isocode.default.getAllCodes() 

this.listofcodeslang = langcodes
}
}

selectlangoftranslating(ev: any ){

this.languagechoosedtotranslateto = ev['detail']['value'];
this.translatetext1()
}


selectlangofspeaking(ev: any ){

  this.languagechoosedtospeaktext = ev['detail']['value'];
  TextToSpeech.stop();
  this.textspeaking = false;
  }

speaktext( ){

if(!this.textspeaking){
TextToSpeech.speak({
  text: this.texttranslated,
  lang: this.languagechoosedtospeaktext,
  rate: 1.0,
  pitch: 1.0,
  volume: 1.0,
  category: 'ambient',
}).then(p => {
  
this.textspeaking = false;

})
this.textspeaking = true;
}else{
  TextToSpeech.stop();
this.textspeaking = false;

}

if(this.videoplayerel){
  if(this.videoplayerel.nativeElement){
this.videoplayerel.nativeElement.pause()
}
}


if(this.videoplayerelrecived){
  if(this.videoplayerelrecived.nativeElement){
this.videoplayerelrecived.nativeElement.pause()
}
}

var element : any = document.querySelector("#audiaielplayerid");
if(element){       

element.pause()

}

var element : any = document.querySelector("#videotextureid");
if(element){       

element.pause()

}


}


speaktextwithtext(text:any ){

  if(!this.textspeaking){
  TextToSpeech.speak({
    text: text,
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    category: 'ambient',
  }).then(p => {
    
  this.textspeaking = false;
  
  })
  this.textspeaking = true;
  }else{
    TextToSpeech.stop();
  this.textspeaking = false;
  
  }
  
  if(this.videoplayerel){
    if(this.videoplayerel.nativeElement){
  this.videoplayerel.nativeElement.pause()
  }
  }
  
  
  if(this.videoplayerelrecived){
    if(this.videoplayerelrecived.nativeElement){
  this.videoplayerelrecived.nativeElement.pause()
  }
  }
  
  var element : any = document.querySelector("#audiaielplayerid");
  if(element){       
  
  element.pause()
  
  }
  
  var element : any = document.querySelector("#videotextureid");
  if(element){       
  
  element.pause()
  
  }
  
  
  }
  


setOpenalertcopiedtext(state: any ){
 
this.isAlertcopiedtextOpen = false;
this.opentoastsaved = false;
this.opentoastsent = false;
}


exitplayingrecordedaiaudio(){
this.showdivplayingaudio = false
var element : any = document.querySelector("#audiaielplayerid");
if(element){       

element.pause()

}

}



playingaudio(audio: any ){

 this.globalaudioaigen = audio
this.showdivplayingaudio = true;

var element : any = document.querySelector("#audiaielplayerid");
if(element){       
element.src = URL.createObjectURL(audio)
element.play()

  getBlobDuration(audio).then(duration => {


  this.duratioaudioai = formatduration(duration* 1000 );   
})

element.ontimeupdate = () => {
  
  this.currenttimeaudioai = formatduration(element.currentTime * 1000);

let p = (element.currentTime / element.duration) * 100;


this.audioplayingpercentage = p
}


element.onpause = () => {
  this.audioaiplaying = false;

}

element.onplay = () => {
  this.audioaiplaying = true;

}

}
}




pauseplayaudiogenerateai(){
  const element : any =  this.videoplayerel.nativeElement;
  if(element){ 
    if(element.paused){ 
      element.play();
      this.audioaiplaying = true;
    }else{ 
      element.pause();
      this.audioaiplaying = false;

    }
}


}

shareaudioaiglobal(){


  blobToBase64(this.globalaudioaigen).then(b64 => {
   
    
    FileSharer.share({
      filename:'Assadiq-audio' +  Date.now() + ".mp3",
      contentType: "audio/wav",
      base64Data: b64.split(',')[1],
  }).then((file) => {
      // do sth
      
  }).catch(error => {
      
  });
});

}


sharevideooutside(item : any){
console.log(item)
if (item.video) {
  blobToBase64(item.video).then(b64 => {
   
    
    FileSharer.share({
      filename:'Assadiq-videos' +  Date.now() + ".mp4",
      contentType: "video/mp4",
      base64Data: b64.split(',')[1],
      
  }).then((file) => {
      // do sth
      
  }).catch(error => {
      
  });
});
} else {
 
   
    
    FileSharer.share({
      filename:'Assadiq-images' +  Date.now() + ".gif",
      contentType: "video/mp4",
      base64Data: item.thumnail.split(',')[1],
      
  }).then((file) => {
      // do sth
      
  }).catch(error => {
      
  });

}


}



shareaudio(audio : any){
  

  blobToBase64(audio).then(b64 => {
   
    
    FileSharer.share({
      filename: 'Assadiq-audio' +  Date.now() +".m4a",
      contentType: "audio/m4a",
      // If you want to save base64:
      base64Data: b64.split(',')[1],
 
  }).then(() => {
      // do sth
  }).catch(error => {
     
  });
});

}



shareimage(image: any){
  let canvas : any = document.querySelector("#canvassnapshot");
  let ctx = canvas.getContext('2d')



let img = new Image();
img.src = image
img.onload = ()=> {
ctx.drawImage(img, 0, 0,1980,1980);
ctx.font = "100px serif";
ctx.textAlign = 'center';
ctx.textBaseline = 'center';
ctx.fillStyle = "#800000";

ctx.fillText("ASSADIQ", canvas.width / 2, canvas.height / 2);

let b64 = canvas.toDataURL()

    FileSharer.share({
      filename:'Assadiq-images' +  Date.now() + ".jpg",
      contentType: "image/jpg",
      // If you want to save base64:
      base64Data: b64.split(',')[1],
 
  }).then(() => {
      // do sth
  }).catch(error => {
     
  });
}

}


sharetext(text: any){
  Share.share({
    text: text,
  });
}

searchlongmusicinput(inputsearchlongmusic: any){
  if(inputsearchlongmusic.value.length >  0){
  this.openmodallongmusic = true;
    this.showspinnerwaitinganimeinfo = true;
    this.http.post(this.urlserver + '/searchlongmusic',{
      'text':inputsearchlongmusic.value
    },{
      'responseType':'json'
    }).subscribe((data: any ) =>{ 
      
if(data){
this.listoflongsong = data;
this.openmodallongmusic = true;
this.showspinnerwaitinganimeinfo = false;
}
})
}
}

onSwipeEndvideo(event: any) {
  
  if(event.direction === 'x' && event.distance > 0){
    console.log('right')
   this.videoplayervg.seekTime(this.videoplayervg.currentTime - 10)

}else if(event.direction === 'y' && event.distance < 0){
  console.log('left')
  this.videoplayervg.seekTime(this.videoplayervg.currentTime + 10)

}

}

onSwipeEndvideorecived(event: any) {
 

  if(event.direction === 'y' && event.distance > 0){
 
    console.log ('top')
    console.log (this.listofvideorecived)
    console.log (this.indexofplayingvideorecived)


if(this.listofvideorecived){
  this.indexofplayingvideorecived = this.indexofplayingvideorecived - 1
  if(this.listofvideorecived[this.indexofplayingvideorecived ]){

    if (this.listofvideorecived[this.indexofplayingvideorecived ]['type'] === 'hls') {

   
      
      if (this.listofvideorecived[this.indexofplayingvideorecived ]['subtitle'] ) {
        if (this.listofvideorecived[this.indexofplayingvideorecived ]['subtitle'].length > 0 ) {
 console.log (this.listofvideorecived[this.indexofplayingvideorecived ]['subtitle'])
this.listofsubtitlesrecived = this.listofvideorecived[this.indexofplayingvideorecived ]['subtitle'];

this.videosubtitleschoosedrecived =  this.listofvideorecived[this.indexofplayingvideorecived ]['subtitle'][0].url

}
}
 
      let video: any = this.videoplayerelrecived.nativeElement
          this.videoreciveduserid = this.listofvideorecived[this.indexofplayingvideorecived ]['id']
            if (Hls.isSupported()) {
      
              var hls = new Hls();
              hls.loadSource(this.listofvideorecived[this.indexofplayingvideorecived ]['video']);
              hls.attachMedia(video);
              video.oncanplay = (c: any ) =>{ 
               
                video.play();
            
            
            }
       
          video.onplaying = (c: any ) =>{ 
            this.videoplayerel.nativeElement.pause()
          }
      
        
          
          }
         
          video.poster = this.listofvideorecived[this.indexofplayingvideorecived ]['poster']
      
          this.videorecivedplayingdescription = this.listofvideorecived[this.indexofplayingvideorecived ]['description'];
          this.videorecivedplayingmap = this.listofvideorecived[this.indexofplayingvideorecived ]['map'];
       
        }else{
          let blob = new Blob([this.listofvideorecived[this.indexofplayingvideorecived ]['video']]);
         
     
          this.videoreciveduserid = this.listofvideorecived[this.indexofplayingvideorecived ]['id']
       
      
         let video : any = this.videoplayerelrecived.nativeElement;
         video.src = URL.createObjectURL(blob);
         this.videorecivedplaying = URL.createObjectURL(blob)
      video.poster = this.listofvideorecived[this.indexofplayingvideorecived ]['poster']
      video.oncanplay = (c: any ) =>{ 
        
        video.play();
    
    
    }

  video.onplaying = (c: any ) =>{ 
    this.videoplayerel.nativeElement.pause()
  }


  this.videorecivedplayingdescription = this.listofvideorecived[this.indexofplayingvideorecived ]['description'];
  this.videorecivedplayingmap = this.listofvideorecived[this.indexofplayingvideorecived ]['map'];
        }

      }

      if(this.indexofplayingvideorecived < 0){
        this.indexofplayingvideorecived = 0
      }


      }
  
}else if(event.direction === 'y' && event.distance < 0){

  console.log ('bottom')
    console.log (this.listofvideorecived)
    console.log (this.indexofplayingvideorecived)
 
    this.indexofplayingvideorecived = this.indexofplayingvideorecived + 1
    if(this.listofvideorecived[this.indexofplayingvideorecived ]){

    if (this.listofvideorecived[this.indexofplayingvideorecived ]['type'] === 'hls') {

   
      
      this.videoreciveduserid = this.listofvideorecived[this.indexofplayingvideorecived ]['id']
 

 
      let video: any = this.videoplayerelrecived.nativeElement
          
            if (Hls.isSupported()) {
      
              var hls = new Hls();
              hls.loadSource(this.listofvideorecived[this.indexofplayingvideorecived ]['video']);
              hls.attachMedia(video);
              video.oncanplay = (c: any ) =>{ 
                console.log('can play');
                video.play();
            
            
            }
      
     
     
        video.onplaying = (c: any ) =>{ 
          this.videoplayerel.nativeElement.pause()
        }
          
          }
         
          video.poster = this.listofvideorecived[this.indexofplayingvideorecived ]['poster']
      
          this.videorecivedplayingdescription = this.listofvideorecived[this.indexofplayingvideorecived ]['description'];
          this.videorecivedplayingmap = this.listofvideorecived[this.indexofplayingvideorecived ]['map'];
       
        }else{
          let blob = new Blob([this.listofvideorecived[this.indexofplayingvideorecived ]['video']]);
       
   
          this.videoreciveduserid = this.listofvideorecived[this.indexofplayingvideorecived ]['id']
       
      
         let video : any = this.videoplayerelrecived.nativeElement;
         video.src = URL.createObjectURL(blob)
         video.poster = this.listofvideorecived[this.indexofplayingvideorecived ]['poster']
         video.oncanplay = (c: any ) =>{ 
          
          video.play();
      
      
      }
 
    video.onplaying = (c: any ) =>{ 
      this.videoplayerel.nativeElement.pause()
    }
    this.videorecivedplayingdescription = this.listofvideorecived[this.indexofplayingvideorecived ]['description'];
    this.videorecivedplayingmap = this.listofvideorecived[this.indexofplayingvideorecived ]['map'];
        }


      }


    

      if(this.indexofplayingvideorecived  > this.listofvideorecived.length){
        this.indexofplayingvideorecived = this.listofvideorecived.length - 1
      }


}

}

videorecievedwaiting(){
  console.log('waiting...........')

this.showspinnerwitingvideorecivedtoplay = true;




}


playingvideorecived(t: VgTimeDisplayComponent ){
  console.log(t.API.duration)
  if(this.videoplayerel){
    if(this.videoplayerel.nativeElement){
  this.videoplayerel.nativeElement.pause()
}

}

var element : any = document.querySelector("#audiaielplayerid");
if(element){       

element.pause()

}

var elementaudio : any = document.querySelector("#videotextureid");
if(elementaudio){       

  elementaudio.pause()

}
TextToSpeech.stop()
this.showspinnerwitingvideorecivedtoplay = false;




console.log(this.videorecivedduration);

if (t) {
 this.videorecivedduration =  t.API.duration
}

}


playingvideo(){
  
  if(this.videoplayerelrecived){
    if(this.videoplayerelrecived.nativeElement){
  this.videoplayerelrecived.nativeElement.pause()
}
}

var element : any = document.querySelector("#audiaielplayerid");
if(element){       

element.pause()

}

var elementaudio : any = document.querySelector("#videotextureid");
if(elementaudio){       

  elementaudio.pause()

}
TextToSpeech.stop()
console.log(this.videoplayereltrack)


if (this.videoplayereltrack) {

//this.videoplayereltrack.nativeElement.track.activeCues[0]['line'] = -3
  
}



}

playingaudioev(){

  if(this.videoplayerelrecived){
    if(this.videoplayerelrecived.nativeElement){
  this.videoplayerelrecived.nativeElement.pause()
}
}


var element : any = document.querySelector("#videotextureid");
if(element){       

element.pause()

}

TextToSpeech.stop()

}


playingvideolocal(){

  if(this.videoplayerelrecived){
    if(this.videoplayerelrecived.nativeElement){
  this.videoplayerelrecived.nativeElement.pause()
}
}

if(this.videoplayerel){
  if(this.videoplayerel.nativeElement){
this.videoplayerel.nativeElement.pause()
}
}

var element : any = document.querySelector("#videotextureid");
if(element){       

element.pause()

}
var elementaudio : any = document.querySelector("#audiaielplayerid");
if(elementaudio){       

  elementaudio.pause()

}
TextToSpeech.stop()

}


openmyvideoitem(item: any,menu?: any){
  console.log(item);
if (item['video']) {
 this.videolocalsrc = URL.createObjectURL(item['video']);
 this.videolocalsrcposter = '';
}
this.showvideolocaldiv = true;


if(menu){
menu?.close()
}


}

registersocketevents(){

  this.socket.on('connect',() => {
  console.log('connect')

    this.socketstate = true;

 


    this.storage.get('useridstored').then((userid) => {
      if(userid){
        this.userid = userid
    }else{
      this.userid = uuidv4();

      this.storage.set('useridstored',this.userid)
  }

  this.socket.emit('userconnected',{
    id : this.userid,
    username : this.username,
   // userimage : this.userblobimage,
    userdescription : this.userdescription,
    userage : this.userage,
    userbirthday : this.userbirthday,
    usergender : this.usergender,
    userPhoneNumber : this.userPhoneNumber,
    useraddress : this.useraddress,
  })


});
if(!this.socketconnectedfirsttime) {


this.socket.on('userconnected',(msg : any ) => {
  console.log(msg)
let p = under.pluck(this.userconnectedlist,'id');
console.log(!p.includes(msg.id))

if(!p.includes(msg.id)){
  this.userconnectedlist.unshift(msg)
if(this.vibrationstate){

  
  Haptics.vibrate().catch()
}
}


if(this.listofuservideos.length > 0){
  let index =Math.floor(Math.random() * this.listofuservideos.length) 
  this.socket.emit('videomessage',this.listofuservideos[index]);
  console.log(`emittttttttttttt`)
  console.log(this.listofuservideos[index])

}

});



    this.socket.on('videomessage',(msg: any ) => {
      console.log(msg)
  


      this.listofvideorecived.push(
        {
         video:msg['video'],
         type:msg['type'],
         poster:msg['poster'],
         id:msg['id'],
         subtitle:msg['subtitle'],
         map:msg['map'],
         description:msg['description'],
         phonenumber:msg['phonenumber'],
    
       }
       )


  



this.indexofplayingvideorecived = 1
if (false) {

if (this.listofvideorecived.length === 1) {

  this.videoreciveduserid = msg['id']

    if (msg['type'] === 'hls') {

   
      

 

 
let video: HTMLVideoElement = this.videoplayerelrecived.nativeElement
    
      if (Hls.isSupported()) {

        var hls = new Hls();
        hls.loadSource(msg['video']);
        hls.attachMedia(video);
        video.oncanplay = (c: any ) =>{ 
         
      if (!this.videorecordingstart) {
        if (!this.videoplayerel.nativeElement.paused) {

          video.play();
        }
      }
      
      
      }
      video.onplaying = (c: any ) =>{ 
        this.videoplayerel.nativeElement.pause()
      }
  
    
    }
   


 
  }else if (msg['type'] === 'music'){
 


   let video : any = this.videoplayerelrecived.nativeElement;
   video.src = msg['video']

   this.videorecivedplayingposter = msg['poster']

   video.oncanplay = (c: any ) =>{ 
   
    if (!this.videorecordingstart) {
      if (!this.videoplayerel.nativeElement.paused) {

        video.play();
      }
    }
  


}



  }else{
    let blob = new Blob([msg['video']]);
    


   let video : any = this.videoplayerelrecived.nativeElement;
   video.src = URL.createObjectURL(blob)

   video.oncanplay = (c: any ) =>{ 
   
    if (!this.videorecordingstart) {
      if (!this.videoplayerel.nativeElement.paused) {

        video.play();
      }
    }


}


}

if (msg['subtitle']) {

this.listofsubtitlesrecived = msg['subtitle'];
if (msg['subtitle'][0]) {

this.videosubtitleschoosedrecived = msg['subtitle'][0]['url']
}
}else {
  this.listofsubtitlesrecived = [];
this.videosubtitleschoosedrecived = ''
}
this.videorecivedplayingdescription = msg['description'];
this.videorecivedplayingmap = msg['map'];
}
}

});


this.socket.on('messagevideo',(msg: any )  => {
  console.log(msg)

  this.listofmessagevideoprive.unshift(msg)
  Haptics.vibrate().catch()


});




this.socket.on('messagevideopublic',(msg: any )  => {
  console.log(msg)

  this.listofmessagevideopublic.unshift(msg)


});


this.socketconnectedfirsttime = true

}

  })

  this.socket.on('disconnect',() => {
  
    this.socketstate = false;
  
  })


}


segmentChangednotificationsection(ev: any){
this.sectionnotificationchoosed = ev['detail']['value']
}





sendvideofromstorageinside(index : any){

this.socket.emit('videomessage',this.listofuservideos[index]);
this.opentoastsent = true;
}


changevideotexturemesh(ev : any){
  if(ev.target){
    if(ev.target.files){
      if(ev.target.files[0]){
        let video : any = document.querySelector('#videotextureid')
        let src : any = URL.createObjectURL(ev.target.files[0]);
        video.src = src;
        video.load();
       video.volume = 0
        video.muted = true;
        video.loop = true
        video.play();
      video.oncanplay = ()  => {
        video.play();
    const texture = new THREE.VideoTexture( video );
    texture.colorSpace = THREE.SRGBColorSpace;
    
    const material = new THREE.MeshBasicMaterial( { map:texture,
      color: 0xffffff
     } );
     material.needsUpdate = true;
        this.globalobjectselected.material = material
      }


}
}
}
}



changeimagetexturemesh(ev : any){
  if(ev.target){
    if(ev.target.files){
      if(ev.target.files[0]){
        let image : any = URL.createObjectURL(ev.target.files[0]);
        var imageLoader = new THREE.ImageLoader();

        var loader = new THREE.TextureLoader();

        loader.load(image,  ( texture )  => {
    
    const material = new THREE.MeshBasicMaterial( { map:texture } );
      
        this.globalobjectselected.material = material
        

})
}
}
}
}


changerangescaley(ev: any){
 
  this.globalobjectselected.scale.y = ev.value
}



changerangescalex(ev: any){
 
  this.globalobjectselected.scale.x = ev.value
}

removeobjectfromscene(){
  this.globalscenethree.remove( this.globalobjectselected );
  this.globalinteractionManager.remove( this.globalobjectselected );
this.openmodalmeshedit = false;



let filteredGoal = under.without(this.globalthreecontoldrag.getObjects(),under.findWhere([this.globalobjectselected], {
  id: this.globalobjectselected.id
}));




this.globalthreecontoldrag.setObjects(filteredGoal)

}


addboxtoscene(){

let color = randomColor()
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial({color: color} );

  
  const mesh = new THREE.Mesh( geometry, material );
  this.globalscenethree.add( mesh );
  
  this.globalinteractionManager.add( mesh );
  this.globalthreecontoldrag.setObjects([...this.globalthreecontoldrag.getObjects(),mesh])





  mesh.addEventListener('click', (event ) => {

this.globalobjectselected =event.target
  this.openmodalmeshedit = true
    });
    this.globalinteractionManager.update();

}


addplanetoscene(){
  
  let color = randomColor()

  const geometry = new THREE.PlaneGeometry( 1, 1 );
  const material = new THREE.MeshBasicMaterial( {color: color} );
    
    const mesh: any = new THREE.Mesh( geometry, material );
    this.globalscenethree.add( mesh );
    
    this.globalinteractionManager.add(mesh);
    this.globalthreecontoldrag.setObjects([...this.globalthreecontoldrag.getObjects(),mesh])
   
    mesh.addEventListener('click', (event : any) => {

this.globalobjectselected =event.target
  this.openmodalmeshedit = true
    });
    this.globalinteractionManager.update();
  }

addparticlestoscene(){
  let color = randomColor()

  var fireRadius = 0.5;
  var fireHeight = 3;
  var particleCount = 800;
  var height = window.innerHeight;
 
  
  var geometry0 = new particleFire.Geometry( fireRadius, fireHeight, particleCount );
  var material0 = new particleFire.Material( { color: color } );
  material0.setPerspective( this.globalcamerathree.fov, height );
  var particleFireMesh0 = new THREE.Points( geometry0, material0 );
  
    this.globalfireparticles = particleFireMesh0

  this.globalscenethree.add( particleFireMesh0 );

  this.globalinteractionManager.add(particleFireMesh0);
  this.globalthreecontoldrag.setObjects([...this.globalthreecontoldrag.getObjects(),particleFireMesh0])


  particleFireMesh0.addEventListener('click', (event : any) => {
    this.globalobjectselected =event.target
    this.openmodalmeshedit = true
      });
      this.globalinteractionManager.update();
   

  }
  


addcapsuletoscene(){
 
  let color = randomColor()
  const geometry = new THREE.CapsuleGeometry( 0.2, 0.2, 4, 8 ); 
    const material = new THREE.MeshBasicMaterial({color: color, side: THREE.DoubleSide} );
    
    const mesh = new THREE.Mesh( geometry, material );
    this.globalscenethree.add( mesh );
    
    this.globalinteractionManager.add(mesh);
    this.globalthreecontoldrag.setObjects([...this.globalthreecontoldrag.getObjects(),mesh])


    mesh.addEventListener('click', (event ) => {
      this.globalobjectselected =event.target
      this.openmodalmeshedit = true
        });
        this.globalinteractionManager.update();
  
  }

  torchstateonoff(){

  const videoTrack = this.globalstream.getVideoTracks()[0];
if(videoTrack.getSettings().torch){
  videoTrack.applyConstraints({
    advanced: [{torch: false}]
  });
  this.lightblubcamera = false;

 
}else{
  videoTrack.applyConstraints({
    advanced: [{torch: true}]
  });
  this.lightblubcamera = true;
}
}

addmusictovideo(){
  if (this.listofnewspotifyreleasealbum.length === 0) {
    this.getnewreleasespotify()

  }
this.showmodalaudioaddtovideo = true;
}


takesnapshotvideo(){


  let videoel : any = this.videoplayerel.nativeElement;

  let snap =  getWebcamSnapshot(videoel,{
   'format':'image/png'
  })


  let img:any = snap;


this.openmodalimagetotextai = true
this.showspinnerwaitingresponseai = true




  const genAI = new GoogleGenerativeAI('AIzaSyCgQQC7gdEsVaN4nFJIOs0jEcfHjQB2-vU');

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

       
        this.openmodalimagetotextai = true
        this.showspinnerwaitingresponseai = true
      

      
     

  const image = {
    inlineData: {
      data:img.split(',')[1],
      mimeType: "image/png",
    },
  };
  model.generateContent(['', image]).then(result=> {
    
    this.imagetotextairesult = [img,result.response.text()]
    this.openmodalimagetotextai = true
    this.showspinnerwaitingresponseai = false;
   

}).catch(err=> {
  this.showspinnerwaitingresponseai = false
  this.openmodalimagetotextai = false
    this.showspinnerwaitingresponseai = false;
});



}


repeattexturescene(x:any,y:any){
  if(this.texturevideorepeated){
  this.globaltexturevideo.repeat.set( 0,0);
  this.texturevideorepeated = false
}else{
  this.globaltexturevideo.repeat.set( x,y);
  this.texturevideorepeated = true;

}
}

addparticlespoints(){

const particlegeometry = new THREE.BufferGeometry();

const partcount = 500;
const position = new Float32Array(partcount * 3)

for (let index = 0; index < partcount; index++) {
  position[index * 3] = (Math.random() - 0.5) * 10
  position[index * 3 + 1 ] = (Math.random() - 0.5) * 10
  position[index * 3 + 2] = (Math.random() - 0.5) * 10
  
}
  particlegeometry.setAttribute('position',new THREE.BufferAttribute(position,3))

  const partmaterial = new THREE.PointsMaterial({
    size:0.3,
    color:'#800'
  })

  const particles = new THREE.Points(particlegeometry,partmaterial);

  this.globalscenethree.add(particles)
}

colormaterialchanged(ev:any){


  this.globalobjectselected.material.color.set( ev )
}

addtexttoscene(text:any){
  let color = randomColor()

  const myText = new Text()
  myText.text = text.value
myText.fontSize = .25
myText.position.z = -1
myText.color = color;
myText.textAlign = 'left';
myText.curveRadius = 20






  this.globalscenethree.add(myText)
  myText.sync()

  this.globalinteractionManager.add(myText);
    this.globalthreecontoldrag.setObjects([...this.globalthreecontoldrag.getObjects(),myText])


    myText.addEventListener('click', (event :any) => {
      this.globalobjectselected =event.target
      this.openmodalmeshedit = true
        });
        this.globalinteractionManager.update();
}



addraintoscene(){
if(false){
  this.globalscenethree.remove( this.globalrain );



this.globalrain = undefined


}else {
let rainCount = 15000;
let positions = [];
let sizes = [];
let rainGeo = new THREE.BufferGeometry();
for (let i = 0; i < rainCount; i++) {

  positions.push(Math.random() * 400 - 200);
  positions.push(Math.random() * 500 - 250);
  positions.push(Math.random() * 400 - 200);
  sizes.push(30);
}
rainGeo.setAttribute(
  "position",
  new THREE.BufferAttribute(new Float32Array(positions), 3)
);
rainGeo.setAttribute(
  "size",
  new THREE.BufferAttribute(new Float32Array(sizes), 1)
);

const vertices = [];
for ( let i = 0; i < 10000; i ++ ) {

  const x = 2000 * Math.random() - 1000;
  const y = 2000 * Math.random() - 1000;
  const z = 2000 * Math.random() - 1000;

  vertices.push( x, y, z );

}
rainGeo.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

let rainMaterial = new THREE.PointsMaterial( { size: 5, sizeAttenuation: true, alphaTest: 0.5, transparent: true } );
rainMaterial.color.set(randomColor() );
let rain = new THREE.Points(rainGeo, rainMaterial);
let a: any = rainGeo.attributes
a.size.array.forEach((r: any, i: any) => {
  r += 0.3;
});

this.globalrain = rain
this.globalscenethree.add(rain);
}
}


addtexturefromcamera(){
  let video : any = this.videoplayerel.nativeElement;




  const texture = new THREE.VideoTexture( video );
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter ;

this.globalobjectselected.background = texture;
  this.openmodalmeshedit = false
}

addshaderpost(){
const shaderPass = new ShaderPass( DotScreenShader );
if(!this.globalshaderpass){

shaderPass.uniforms[ 'scale' ].value = 1.5;


this.globalcomposer.addPass( shaderPass );

this.globalshaderpass = shaderPass
}else{

  this.globalcomposer.removePass( this.globalshaderpass );

this.globalshaderpass = undefined

}
}


rangeChangeshadereffect(ev:any){
  this.globalglitcheffect.uniforms[ 'scale' ].value = ev['detail']['value'];


}


addglitchpost(){
 let color = randomColor()
  if(!this.globalglitcheffect){
  
    let glitchPass: any  = new GlitchPass();

			

        const material = new THREE.MeshBasicMaterial({color: color, side: THREE.DoubleSide} );
				glitchPass.material = material 
        glitchPass.goWild = true;

				glitchPass.uniforms.amount.value = 4;

				this.globalcomposer.addPass( glitchPass );
        this.globalglitcheffect = glitchPass
  }else{
  
    this.globalcomposer.removePass( this.globalglitcheffect );
  
  this.globalglitcheffect = undefined
  
  }
  }


  rangechangestrengthbloompass(ev:any){


    this.globalbloompass.strength = ev['detail']['value'];
  
  
  }


  rangechangethresholdbloompass(ev:any){
   

    this.globalbloompass.threshold = ev['detail']['value'];
  
  
  }


  rangechangeradiusbloompass(ev:any){


    this.globalbloompass.radius = ev['detail']['value'];
  
  
  }
  
  
addbloompass(){
  let color = randomColor()
  if(!this.globalbloompass){
  const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
  bloomPass.threshold = 0;
  bloomPass.strength = 3;
  bloomPass.radius = 0.5;
	this.globalcomposer.addPass( bloomPass );
this.globalbloompass = bloomPass
}else{
  
  this.globalcomposer.removePass( this.globalbloompass );

this.globalbloompass = undefined

}
}


addhalftoonpass(){
  let color = randomColor()
  if(!this.halftoonpassglobal){
const params = {
  shape: 1,
  radius: 4,
  rotateR: Math.PI / 12,
  rotateB: Math.PI / 12 * 2,
  rotateG: Math.PI / 12 * 3,
  scatter: 0,
  blending: 1,
  blendingMode: 1,
  greyscale: false,
  disable: false
};
const halftonePass = new HalftonePass( window.innerWidth, window.innerHeight, params );
this.halftoonpassglobal = halftonePass
this.globalcomposer.addPass( halftonePass );
}else{
  
  this.globalcomposer.removePass( this.halftoonpassglobal );

this.halftoonpassglobal = undefined

}
}




opencameravideo1(){
  navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'environment'
    },
   audio: true
  }).then(stream=> {



this.minimiseplayer = false;
  this.videorecordingstart = true;
  this.showmodaltrackmp3 = false;
  this.openmodallongmusic = false;
  this.showplayervideo = true;
  this.videosubtitleschoosed = ''
  this.showspinnerwaitingforvideotoplay = true;
  this.globaltracksimageposter = '';
  this.showvideorecordedbuttonsdiv = false;
        
  this.listofvideoqualities = [];
  this.listofsubtitles = [];
 
  const width = window.innerWidth, height = window.innerHeight * 0.8;
  let canvasdiv : any = document.querySelector("#canvasrecordingthreejsid");

  // init
  
  const camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );

  camera.position.z = 2;




  const scene = new THREE.Scene();
  


  const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
light.intensity = 100000
scene.add( light );


const lighthem = new THREE.HemisphereLight( 0xff0000, 1, 100 );
lighthem.position.set( 50, 50, 50 );
lighthem.intensity = 100000
scene.add( lighthem );

const lightd = new THREE.DirectionalLight( 0xffffff, 4 );
				lightd.position.set( 1, 1, 1 );
				scene.add( lightd );
  
  const renderer = new THREE.WebGLRenderer( { 
    powerPreference: "high-performance",
    antialias: false,
    stencil: false,
    depth: false,
    preserveDrawingBuffer: true
  } );
  renderer.setSize( width, height );
  renderer.setAnimationLoop( animate );

  let canvasap : any = document.querySelector("#canvasrecordingthreejsid>canvas");
if(canvasap){
canvasdiv.removeChild( canvasap )
}
  canvasdiv.appendChild( renderer.domElement );

  


    let video : any = this.videoplayerel.nativeElement;
  
  video.srcObject = stream
video.volume = 0;




  const texture = new THREE.VideoTexture( video );
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter ;

scene.background = texture;
this.globaltexturevideo = texture


  const interactionManager = new InteractionManager(
    renderer,
    camera,
    renderer.domElement
  );

  this.globalinteractionManager = interactionManager

  const myText = new Text()
  myText.text = 'ASSADIQ'
myText.fontSize = 0.35
myText.position.z = -2
myText.position.y = 2


myText.color = '#800';
myText.textAlign = 'center';
myText.curveRadius = 20
  scene.add(myText)















        



  this.globalcamerathree = camera

  this.globalscenethree = scene



  const controlsdrag = new DragControls( [], camera, renderer.domElement );

  this.globalthreecontoldrag = controlsdrag



  const composer = new EffectComposer( renderer );
  composer.addPass( new RenderPass( scene, camera ) );






		


 
        this.globalcomposer = composer








 

	


        this.globalstream = stream;

  

  let canvas : any = document.querySelector("#canvasrecordingthreejsid>canvas");
  let audio : any = document.querySelector("#videotextureid");


  audio.muted = false;

  audio.volume = 1;



  this.globalcanvassteam =     renderer.domElement.captureStream();



  let videoel : any = this.videoplayerel.nativeElement;
  let canvaeldiv : any = document.querySelector("#canvaeldivid");
  if(!this.audiomotion){ 
  const audioMotion = new AudioMotionAnalyzer(
    canvaeldiv,
    {
      source: videoel,
      'colorMode':'bar-level',
      'overlay':true,
      'showScaleX':false,
              showBgColor: false

    }
  );
  audioMotion.start()
  this.audiomotion = audioMotion

  if(!this.globalaudioapicontext){ 
    let ctx = audioMotion.audioCtx;
if(stream.getAudioTracks().length > 0){

    let dest = ctx.createMediaStreamDestination();
    let sourceNode = ctx.createMediaElementSource(audio);
    let sourceNodestream = ctx.createMediaStreamSource(stream);

    sourceNode.connect(dest);
    sourceNode.connect(ctx.destination);


    sourceNodestream.connect(dest);
    sourceNodestream.connect(ctx.destination);


        let audioTrack = dest.stream.getAudioTracks()[0];

       
       


  // add it to your canvas stream:
    this.globalcanvassteam.addTrack(audioTrack);
    
this.globalaudioapicontext = true
  }else{

}
}


}





      video.oncanplay = (c: any ) =>{ 
        video.play();
  this.showspinnerwaitingforvideotoplay = false;
  let canvaeldiv : any = document.querySelector("#canvaeldivid");


 
   

        const sUsrAg = navigator.userAgent;
let audiostream 
        if (sUsrAg.indexOf('Firefox') > -1) {
           audiostream = audio.mozCaptureStream()
      
        } else {
           audiostream = audio.captureStream()
  
        }
    
  
 
      


     // var multiStreamRecorder = new MediaStreamRecorder(this.globalcanvassteam);
      var multiStreamRecorder = new MediaRecorderex({

      });
    
    //const mediaRecorder = new MediaRecorderex.Recorder(this.globalcanvassteam);

     
this.globalmediarecorder = multiStreamRecorder;


}
let this1 = this
let last = 0;
function animate( time:any ) {
  var delta = new THREE.Clock().getDelta();
  var elapsed = new THREE.Clock().getElapsedTime();




  renderer.render( scene, camera );

  composer.render();
  composer.setSize( window.innerWidth, window.innerHeight );





// RainDrop Animation


if (this1.globalrain) {

this1.globalrain.rotation.y += 0.002

this1.globalrain.position.x -= 0.02;
	if (this1.globalrain.position.x < -200) {
		this1.globalrain.position.x = 0;
	}
}




 
	




camera.lookAt( scene.position );

}



this.globalrendererthree = renderer;

this.menuel.disabled = true;

})




}


opencameravideo2(){
  navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'environment',
      'width':1920,
      'height':1080,

    },
   audio: true
  }).then(stream=> {


this.minimiseplayer = false;
  this.videorecordingstart = true;
  this.showmodaltrackmp3 = false;
  this.openmodallongmusic = false;
  this.showplayervideo = true;
  this.videosubtitleschoosed = ''
  this.showspinnerwaitingforvideotoplay = true;
  this.globaltracksimageposter = '';
  this.showvideorecordedbuttonsdiv = false;
        
  this.listofvideoqualities = [];
  this.listofsubtitles = [];



  



  


    let video : any = this.videoplayerel.nativeElement;
  
  video.srcObject = stream
  video.setAttribute('muted',true)
  this.videoplayervg.volume = 0

        this.globalstream = stream;

  

  let canvas : any = document.querySelector("#canvasrecordingthreejsid>canvas");
  let audio : any = document.querySelector("#videotextureid");


  audio.muted = false;

  audio.volume = 1;





const sUsrAg = navigator.userAgent;
let audiostream 
        if (sUsrAg.indexOf('Firefox') > -1) {
           audiostream = audio.mozCaptureStream()
      
        } else {
           audiostream = audio.captureStream()
  
        }
        
  let videoel : any = this.videoplayerel.nativeElement;
  let canvaeldiv : any = document.querySelector("#canvaeldivid");


if(stream.getAudioTracks().length > 0){



  if(!this.audiomotion){ 
  const audioMotion = new AudioMotionAnalyzer(
    canvaeldiv,
    {
      source: videoel,
      'colorMode':'bar-level',
      'overlay':true,
      'showScaleX':false,
              showBgColor: false

    }
  );
  audioMotion.start()
  this.audiomotion = audioMotion

  if(!this.globalaudioapicontext){ 
    let ctx = audioMotion.audioCtx;
if(stream.getAudioTracks().length > 0){

    let dest = ctx.createMediaStreamDestination();
    let sourceNode = ctx.createMediaElementSource(audio);
    let sourceNodestream = ctx.createMediaStreamSource(stream);

    sourceNode.connect(dest);
    sourceNode.connect(ctx.destination);


    sourceNodestream.connect(dest);
    sourceNodestream.connect(ctx.destination);


        let audioTrack = dest.stream.getAudioTracks()[0];

       
       


  // add it to your canvas stream:
  audiostream.addTrack(audioTrack);
 
    
this.globalaudioapicontext = true
  }else{

}
}


}else{

}

}




      video.oncanplay = (c: any ) =>{ 
        video.play();
  this.showspinnerwaitingforvideotoplay = false;
  let canvaeldiv : any = document.querySelector("#canvaeldivid");


 
   

let mediastream = new MediaStream()
    
if(stream.getAudioTracks().length > 0){

 
    mediastream = new MediaStream([...audiostream.getAudioTracks(),...stream.getTracks()])

  }else{
    mediastream =  new MediaStream([...stream.getTracks()])
}

this.globalcanvassteam = mediastream


}
let this1 = this






this.menuel.disabled = true;



})




}

rangeChangevolumeaudiorecording(ev:any){
  let audio : any = document.querySelector("#videotextureid");


  this.lastvolumeaudiorecording = ev['detail']['value'];

  audio.volume = this.lastvolumeaudiorecording;
}



stopaudiorecording(){
  let audioElement:any = document.querySelector("#audiaielplayerid");
 
  if(this.globalmediarecorder){

  this.globalmediarecorder.stop();

}
audioElement.pause();
audioElement.src = null;
this.showdivrecordingaudio = false;


  
}




openaudiorecording(){
  let audioElement:any = document.querySelector("#audiaielplayerid");
  let canvasElement:any = document.querySelector("#canvaeldivid");
  console.log(audioElement)

  getMediaStream( {
    constraints:{
          'audio':true,
          video: false
        },
    'options':{
    'muted':false,
    'cameraResolutionMode':'ideal',
    'mainCamera':true
    }
      }, 30000).then(stream=> {
  
  
    //audioElement.src = 'https://p.scdn.co/mp3-preview/7f5876f75d3fd6f22352883b631dbcad26f41780?cid=d1f3117491fb4812b73efbe1002b927b';

    audioElement.srcObject = stream
 
  
  

    audioElement.oncanplay = ()=> {
      audioElement.play()

this.showdivrecordingaudio = true;
}


var multiStreamRecorder = new MediaRecorderex({
  timeslice:5000,
  ondataavailable: (blob: any)=> {


  },
  onstop: (blob: any)=> {
   
      const audioContext = new AudioContext();
    
       
  
        blob.arrayBuffer().then((buffer: any) => {
          audioContext.decodeAudioData(buffer, (audioBuffer) => {
      
            // Do something with audioBuffer
      
           
          var waveSVG : SVGSVGElement= drawBuffer.svg(audioBuffer,  window.innerWidth,75, '#800000');
      
        this.listofaihelp.push({
          type:'audio',
          audio:blob,
          svg:this.sanitizer.bypassSecurityTrustHtml(waveSVG.outerHTML),
  
        })
        const element : any = document.querySelector("#divlastchataiid");
  if(element){    
  element.scrollIntoView();
  }
      })
  
    })

  
  
  
}
});
multiStreamRecorder.timeslice = 5000
this.globalmediarecorder = multiStreamRecorder;
  this.globalmediarecorder.start(stream);


  });
}






opencameravideoprev(music:any){

  CameraPreview.start({ 
    parent: "cameraPreview",
    'disableAudio':true}).then(s=> {
    console.log(s)

    CameraPreview.startRecordVideo({}).then(stream=> {
    console.log(stream)
    this.showcamerprivewdiv = true;
  });
});


}







opencameravideo(music:any){
  this.showmodaluserprofile = false;
  this.showmodaluservideos = false;
  this.showspinnerhome = true;
  this.showspinnerwitingvideorecivedtoplay = false;
  this.sendimagegif = false;
  getMediaStream( {
  
constraints:{
      'audio':true,
      video: {
        facingMode: 'environment',
       'height':1080,
       'width':1920,

      },
    },
'options':{
'muted':false,
'cameraResolutionMode':'max',
'mainCamera':true,

}
  }, 30000).then(stream=> {



this.minimiseplayer = false;
  this.videorecordingstart = true;
  this.showmodaltrackmp3 = false;
  this.openmodallongmusic = false;
  this.showplayervideo = true;
  this.videosubtitleschoosed = ''
  this.showspinnerwaitingforvideotoplay = true;
  this.globaltracksimageposter = '';
  this.showvideorecordedbuttonsdiv = false;
        
  this.listofvideoqualities = [];
  this.listofsubtitles = [];

  this.showspinnerhome = false;


  



  


    let video : any = this.videoplayerel.nativeElement;
  
  video.srcObject = stream
  video.setAttribute('muted',true)
  this.videoplayervg.volume = 0

        this.globalstream = stream;

  


  let audio : any = document.querySelector("#videotextureid");


  audio.muted = false;

  audio.volume = this.lastvolumeaudiorecording;





const sUsrAg = navigator.userAgent;
let audiostream 
        if (sUsrAg.indexOf('Firefox') > -1) {
           audiostream = audio.mozCaptureStream()
      
        } else {
           audiostream = audio.captureStream()
  
        }
       
  let videoel : any = this.videoplayerel.nativeElement;
  let canvaeldiv : any = document.querySelector("#canvaeldivid");


if(stream.getAudioTracks().length > 0){



  if(!this.audiomotion){ 
  const audioMotion = new AudioMotionAnalyzer(
    canvaeldiv,
    {
      source: videoel,
      'colorMode':'bar-level',
      'overlay':true,
      'showScaleX':false,
              showBgColor: false

    }
  );
  audioMotion.start()
  this.audiomotion = audioMotion

  if(!this.globalaudioapicontext){ 
    let ctx = audioMotion.audioCtx;


    let dest = ctx.createMediaStreamDestination();
    let sourceNode = ctx.createMediaElementSource(audio);
   

    sourceNode.connect(dest);
    sourceNode.connect(ctx.destination);





        let audioTrack = dest.stream.getAudioTracks()[0];

      
       


  // add it to your canvas stream:
  audiostream.addTrack(audioTrack);
 
  this.globalaudiostreammusic = audiostream
    
this.globalaudioapicontext = true

}


}else{
  if(!this.globalaudioapicontext){ 
    let ctx = this.audiomotion.audioCtx;


    let dest = ctx.createMediaStreamDestination();
    let sourceNode = ctx.createMediaElementSource(audio);
   

    sourceNode.connect(dest);
    sourceNode.connect(ctx.destination);





        let audioTrack = dest.stream.getAudioTracks()[0];


       


  // add it to your canvas stream:
  audiostream.addTrack(audioTrack);
 
  this.globalaudiostreammusic = audiostream
    
this.globalaudioapicontext = true

}
}

}




      video.oncanplay = (c: any ) =>{ 
        video.play();
  this.showspinnerwaitingforvideotoplay = false;
  let canvaeldiv : any = document.querySelector("#canvaeldivid");


 
   

let mediastream = new MediaStream()
    
if(stream.getAudioTracks().length > 0){

if(music){
 
    mediastream = new MediaStream([...this.globalaudiostreammusic.getAudioTracks()
     
      ,...stream.getTracks()])
  this.addmusictovideo()
this.addmusictovideorecording = true; 
  }else{
    mediastream = new MediaStream([...stream.getTracks()

      
    ])
    this.addmusictovideorecording = false; 

}

  }else{
    mediastream =  new MediaStream([...stream.getTracks()])
}

this.globalcanvassteam = mediastream
if(this.videoplayerelrecived){ 

this.videoplayerelrecived.nativeElement.pause()

}

}
let this1 = this






this.menuel.disabled = true;
if(this.videoplayerelrecived){
  if(this.videoplayerelrecived.nativeElement){
this.videoplayerelrecived.nativeElement.pause()
}

}

}).catch(err=> {
  this.showspinnerhome = false;
if(this.platform.is('android')){

}

NativeSettings.openAndroid({
  option: AndroidSettings.ApplicationDetails,
});

})
let s: any  = this.swiperhome.nativeElement
 
//s.swiper.slideTo(1);
this.menuel.close()
this.minimiseplayer = false;
}

muteaudiouserrecording(){
  if(this.globalstream){

    if(this.audiouserstreamenabled){
    this.globalstream.getTracks().forEach((track: MediaStreamTrack) => {
  if(track.kind === 'audio'){
track.enabled = false
this.audiouserstreamenabled = false
    }
      
    });
  }else{
    this.globalstream.getTracks().forEach((track: MediaStreamTrack) => {
      if(track.kind === 'audio'){
    track.enabled = true
    this.audiouserstreamenabled = true
        }
          
        });
    }
  }

  
  


}


mutemusicuserrecording(){

  let audio : any = document.querySelector("#videotextureid");

  if(this.globalaudiostreammusic){
    if(this.audiousermusicenabled){

    this.globalaudiostreammusic.getTracks().forEach((track: any) => {
      console.log(track)
      if(track.kind === 'audio'){
        track.enabled = false
    this.audiousermusicenabled = false
    audio.volume = 0
            }
    });
    }
  }else{
    if(this.audiousermusicenabled){

      this.globalaudiostreammusic.getTracks().forEach((track: any) => {
        console.log(track)
        if(track.kind === 'audio'){
          track.enabled = true
      this.audiousermusicenabled = true
    audio.volume = this.lastvolumeaudiorecording
     
              }
      });
      } 
}
}




mutevideouserrecording(){
  if(this.globalstream){

    if(this.videouserstreamenabled){
    this.globalstream.getTracks().forEach((track: MediaStreamTrack) => {
  if(track.kind === 'video'){
track.enabled = false
this.videouserstreamenabled = false
    }
      
    });
  }else{
    this.globalstream.getTracks().forEach((track: MediaStreamTrack) => {
      if(track.kind === 'video'){
    track.enabled = true
    this.videouserstreamenabled = true
        }
          
        });
    }
  }

    if(this.globalaudiostreammusic){

      this.globalaudiostreammusic.getTracks().forEach((track: any) => {
        console.log(track);
      });
  
      }
  


}


viewimagefullscreen(img:any){
console.log(img)
this.imagetoviewfull = img['image'];
this.showimageviewerdiv = true
}


viewimagefullscreenc(img:any){
  console.log(img)
  this.imagetoviewfull = img;
  this.showimageviewerdiv = true
  }
  


sendvideotoothers(type: any,descriptioninput: any,inputpriceproduct: any){
  let time = Date.now()

  if(this.videoblobtosend){
    this.showprogressupladingfile = true;



  if (!this.sendimagegif) {
    this.showmodaluservideos = true

    this.socket.emit('videomessage',{
      video:this.videoblobtosend,
      type:type,
      id:this.userid,
      map:this.coordinateonmap,
      description:descriptioninput.value,
      time:time,
      phonenumber:this.userPhoneNumber,
      
    },(status:any) => {
      console.log(status);
    })

  generateVideoThumbnails.importFileandPreview(this.videoblobtosend).then(file => {
  
    console.log(this.videoblobtosend)
  getBlobDuration(this.videoblobtosend).then(duration => {
    console.log(duration)
   

    let r = Math.random() * duration

    generateVideoThumbnails.getVideoCover(file,r).then(thumnail => {
      console.log(thumnail)
  this.listofuservideos.unshift({
    video:this.videoblobtosend,
    type:type,
    id:this.userid,
    map:this.coordinateonmap,
    description:descriptioninput.value,
    thumnail:thumnail,
    time:time,
    phonenumber:this.userPhoneNumber,

  })
  this.storage.set('listofuservideos',this.listofuservideos);
  this.showprogressupladingfile = false;
  this.videoblobtosend = null;

})

})
})
}else{

}


this.exitvideoplayer()
this.opentoastsent = true;
this.showvideolocaldiv = false;

//this.uploadvideo()
if (this.sendimagegif) {
this.uploadimage(this.videoblobtosend,descriptioninput.value,inputpriceproduct.value)
  
}

this.videoplayerel.nativeElement.pause();
this.videoplayerel.nativeElement.src = '';
}

}


sendvideotoothershls(type: any){
  if(this.videoplayingsrc){
   
    console.log(this.globaltracksimageposter);

  this.socket.emit('videomessage',{
    video:this.videoplayingsrc,
    type:this.videoplayingsrctype,
    poster:this.globaltracksimageposter,
    id:this.userid,
    subtitle:this.listofsubtitles,
    time:this.videoplayerel.nativeElement.currentTime,
  })
  this.opentoastsent = true;

  this.http.post(this.urlserver + '/videohlsurlpost',{
    url:this.videoplayingsrc,
    subtitle:this.listofsubtitles,
    time:this.videoplayerel.nativeElement.currentTime,
    poster:this.globaltracksimageposter,
    type:this.videoplayingsrctype,

  },{
    'responseType':'text'
  }).subscribe((data: any ) =>{ 
    console.log(data);
 
  
  })

}
}

playingpausevideolocal(){
  let video : any = document.querySelector('#videoplayerelocalid')
  console.log(video)

  if(video.paused){
    video.play()
  }else{
    video.pause()

  }

}


startrecordingvideo(){
  const mimeType = 'video/webm\;codecs=h264';

  var multiStreamRecorder = new MediaRecorderex({
    timeslice:5000,
    ondataavailable: (blob: any)=> {
  

    },
    onstop: (blob: any)=> {



      fixWebmDuration(new Blob([blob], { type: mimeType })).then(fixblob => {
        console.log(fixblob);
     
      var video : any = this.videoplayerel.nativeElement;
      video.volume = 1
      this.videoblobtosend = fixblob
      video.srcObject = null;
  video.src = URL.createObjectURL(fixblob);
  this.videorecordingstart = false;
  this.videorecordingstartbyuser = false;
  
  let videobac : any = document.querySelector('#videotextureid')
  
           this.showvideorecordedbuttonsdiv = true;
         
     
        videobac.pause();
  
  
        video.oncanplay = (c: any ) =>{ 
          
          video.play()
        }


})
  
        if(this.globalstream){
  
        const videoTrack = this.globalstream.getVideoTracks()[0];
       
          videoTrack.applyConstraints({
            advanced: [{torch: false}]
          });

        stopMediaStream(this.globalstream)


        }
  
          this.lightblubcamera = false;
          this.menuel.disabled = false;
  
  this.globalmediarecorder = undefined
  this.videouserstreamenabled = true;
this.audiouserstreamenabled = true;
  }
});
multiStreamRecorder.timeslice = 5000
this.globalmediarecorder = multiStreamRecorder;
console.log(multiStreamRecorder);

if(this.globalmediarecorder){
  multiStreamRecorder.start(this.globalcanvassteam);
  this.videorecordingstartbyuser = true;

  this.globalmediarecorder.ondataavailable = (blob: any)=> {
   
    var video : any = this.videoplayerel.nativeElement;
    video.volume = 1
    
    video.srcObject = null;
video.src = URL.createObjectURL(blob);
this.videorecordingstart = false;
this.videorecordingstartbyuser = false;

let videobac : any = document.querySelector('#videotextureid')

         this.showvideorecordedbuttonsdiv = true;
       
   
      videobac.pause();


      video.oncanplay = (c: any ) =>{ 
        
        video.play()
      }

      if(this.globalstream){

      const videoTrack = this.globalstream.getVideoTracks()[0];
     
        videoTrack.applyConstraints({
          advanced: [{torch: false}]
        });
      }

        this.lightblubcamera = false;
        this.menuel.disabled = false;

this.globalmediarecorder = undefined
  }
}

}


videochangedfromdevice(ev : any,input: any){
  
 console.log(ev.target.files)

  if(ev.target){
    if(ev.target.files){
      if(ev.target.files[0]){
         this.sendimagegif = false;

        var video : any = this.videoplayerel.nativeElement;
        video.volume = 1
        this.videoblobtosend = ev.target.files[0]
        video.srcObject = null;
    video.src = URL.createObjectURL(ev.target.files[0]);
    this.videorecordingstart = false;
    this.videorecordingstartbyuser = false;
    
    let videobac : any = document.querySelector('#videotextureid')
    
             this.showvideorecordedbuttonsdiv = true;
           
       
          videobac.pause();
 
    
    
          video.oncanplay = (c: any ) =>{ 
           
            video.play()
          }
    
     
    
            this.lightblubcamera = false;
            this.menuel.disabled = false;
    
    this.globalmediarecorder = undefined 
this.showplayervideo = true;
this.minimiseplayer = false;

}
}
}


}






changeuserprofileimage(ev : any,input: any){


  if(input.value){

    if(ev.target){
      if(ev.target.files){
        if(ev.target.files[0]){

         this.userprofileimage = URL.createObjectURL(ev.target.files[0]);
this.userblobimage = ev.target.files[0]
this.storage.set('userprofileimage',ev.target.files[0])

}
}
}
}
input.value = null
}

uploadimage(blob:any,description:any,price:any){

const formData: FormData = new FormData();
let time = Date.now()
let p:any = Number(price)
 formData.append('v1', blob, 'Assadiq-images' +  time + ".gif");
  formData.append('price', p);
  formData.append('idofuser', this.userid);
  formData.append('map', this.coordinateonmap);
  formData.append('phonenumber', this.userPhoneNumber);
  formData.append('description', description);
this.http.post(this.urlserver + '/upload',formData,{
  'responseType':'text',
  'reportProgress':true,
  observe: "events"
})

.subscribe((data: any ) =>{ 
  this.showprogressupladingfile = true;
  console.log(data);
this.progressuploadingfile = (data.loaded / data.total) *  100;
if(data.loaded === data.total){ 

}
},err =>{
  this.showprogressupladingfile = false;

 })
}


imagesvideochangedfromdevice(ev : any,input: any){
  let base64list: any =[]
  if(input.value){
    if(ev.target){
    if(ev.target.files){
      if(ev.target.files[0]){

this.showspinnerhome = true;
this.showspinnerwaitingforvideotoplay =true
this.showplayervideo = true;
this.minimiseplayer = false;
this.sendimagegif = true

       
for (let index = 0; index < ev.target.files.length; index++) {
  const element = ev.target.files[index];

  blobToBase64(element).then(b64 => {
    base64list.push(b64)




 



    let this1 = this

    this1.showspinnerwaitingforvideotoplay =true
this1.showplayervideo = true;

    this.globaltracksimageposter = 'null';
   if (base64list.length === ev.target.files.length) {
    console.log(base64list)
    
    gifshot.createGIF({
      'images': base64list,
      'gifWidth': 1080,
      'gifHeight': 720,
      'interval': 1,
      'frameDuration': 2,
      'progressCallback': function(captureProgress:any) {
        console.log(captureProgress)

      }
    },function(obj:any) {
      console.log(obj)

      if(!obj.error) {
        console.log(obj)
        let v = obj.image
        base64ToBlob(v).then(blob => {
      this1.showspinnerwaitingforvideotoplay =false
      this1.globaltracksimageposter = URL.createObjectURL(blob);
      this1.videoblobtosend = blob;
this1.sendimagegif = true
    this1.showvideorecordedbuttonsdiv = true;
       this1.listofsubtitles = [];
       this1.listofvideoqualities = []

        var video : any = this1.videoplayerel.nativeElement;
        video.src = ''
        
        video.srcObject = null;
 
    this1.videorecordingstart = false;
    this1.videorecordingstartbyuser = false;
    
    let videobac : any = document.querySelector('#videotextureid')
    
             this1.showvideorecordedbuttonsdiv = true;
           
       
          videobac.pause();
    
    
          video.oncanplay = (c: any ) =>{ 
            
            video.play()
          }
    
input.value = null;
     
    
            this1.lightblubcamera = false;
            this1.menuel.disabled = false;
    
    this1.globalmediarecorder = undefined 
this1.showplayervideo = true;
this1.minimiseplayer = false;

this1.showspinnerhome = false;

});
     
}
});

}


});
  
}



}
}
}
}
}

stoprecordingvideo(){


  if(this.globalmediarecorder){
    if(this.globalmediarecorder){
    this.globalmediarecorder.stop();
    this.videorecordingstartbyuser = false;
   
  }
}

  if(this.globalstream){

  this.globalstream.getTracks().forEach(function(track: any) {
    track.stop();
  });
this.globalstream = undefined
  }
}




  opencameraforchatai(){
    Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      'saveToGallery': false
        
        }).then((b64:any)=> { 
    
    const genAI = new GoogleGenerativeAI('AIzaSyCgQQC7gdEsVaN4nFJIOs0jEcfHjQB2-vU');

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  base64ToBlob("data:image/jpg;base64,"+b64.base64String).then(blob=> { 
          this.showspinnerwaitingresponseai = true;

    const image = {
      inlineData: {
        data:b64.base64String,
        mimeType: "image/jpg",
      },
    };
    model.generateContent(['', image]).then(result=> {
     
      this.imagetotextairesult = [URL.createObjectURL(blob),result.response.text()]
      this.openmodalimagetotextai = true
      this.showspinnerwaitingresponseai = false
  }).catch(err=> {
    this.showspinnerwaitingresponseai = false
  
  });
  });
});
  
  
 
  
  
}


onWillDismissmap(ev:any ) {
this.showmodalmap = false;
this.userADDRESS = false;
}



leafleatmapready(map:Map ) {
this.showspinnerwaitingmap = true;
this.globalmap = map
this.globalmarkmap.addTo(this.globalmap);

console.log(map )
console.log(this.videorecivedplayingmap )

if(this.gotocordinnate){
if(this.globalmap){

  this.globalmap.flyTo(latLng(this.videorecivedplayingmap),18,{
    'animate':false
  });
  
  this.globalmarkmap.setLatLng(latLng(this.videorecivedplayingmap))
  this.globalmarkmap.addTo(this.globalmap);
  this.showspinnerwaitingmap = false

}else{
  map.flyTo(latLng(this.videorecivedplayingmap),18,{
    'animate':false
  });
  
  this.globalmarkmap.setLatLng(latLng(this.videorecivedplayingmap))
  this.globalmarkmap.addTo(this.globalmap);
  this.showspinnerwaitingmap = false

}

}else{


  Geolocation.getCurrentPosition().then(location => {
map.flyTo(latLng(location.coords.latitude,location.coords.longitude),18,{
  'animate':false
});

this.globalmarkmap.setLatLng(latLng(location.coords.latitude,location.coords.longitude))
this.globalmarkmap.addTo(this.globalmap);

this.coordinateonmap = [location.coords.latitude,location.coords.longitude]

NativeGeocoder.reverseGeocode({
  'latitude':location.coords.latitude,
  'longitude':location.coords.longitude,
}).then(geocoder => {


  this.addressonmap = geocoder.addresses[0].thoroughfare + ' '  + geocoder.addresses[0].locality

  }).catch(err => {
  
  
  
  })
  this.showspinnerwaitingmap = false
}).catch(err => {
  this.showspinnerwaitingmap = false
  NativeSettings.openAndroid({
    option: AndroidSettings.Location,
  });

})
}

map.on('click', (e)=> {        
console.log (e)     
this.globalmarkmap.setLatLng(e.latlng)
this.globalmarkmap.addTo(this.globalmap);
this.coordinateonmap = [e.latlng.lat,e.latlng.lng]


NativeGeocoder.reverseGeocode({
  'latitude':e.latlng.lat,
  'longitude':e.latlng.lat,
}).then(geocoder => {
  console.log(geocoder )

  this.addressonmap = geocoder.addresses[0].thoroughfare + ' '  + geocoder.addresses[0].locality

  }).catch(err => {
  
  
  
  })

});
  window.dispatchEvent(new Event('resize'));
  }




  leafleatmapreadyclicked() {
    this.showspinnerwaitingmap = true;
      Geolocation.getCurrentPosition().then(location => {
        console.log(location )
        this.globalmap.flyTo(latLng(location.coords.latitude,location.coords.longitude),18,{
      'animate':false
    });
    

    this.globalmarkmap.setLatLng(latLng(location.coords.latitude,location.coords.longitude))
    this.globalmarkmap.addTo(this.globalmap);
  
    
    NativeGeocoder.reverseGeocode({
      'latitude':location.coords.latitude,
      'longitude':location.coords.longitude,
      
    }).then(geocoder => {
      console.log(geocoder )
    this.addressonmap = geocoder.addresses[0].thoroughfare + ' '  + geocoder.addresses[0].locality
    
      }).catch(err => {
      
      
      
      })
      this.showspinnerwaitingmap = false
    }).catch(err => {
      this.showspinnerwaitingmap = false
    
    
    })
    
      window.dispatchEvent(new Event('resize'));
      }





sendvideotoothershlssocial(){
  let canvas : any = document.querySelector("#canvassnapshot");
  let ctx = canvas.getContext('2d')
  if(this.globaltracksimageposter){
    fetch(this.globaltracksimageposter).then(data => {
    
    return data.blob()
    }).then(data => {
    
      blobToBase64(data).then(b64 => {
     
      

      
      let img = new Image();
      img.src = b64
      img.onload = ()=> {
      ctx.drawImage(img, 0, 0,1980,1980);
      ctx.font = "100px serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'center';
      ctx.fillStyle = "#800000";
      
      ctx.fillText("ASSADIQ", canvas.width / 2, canvas.height / 2);
      
      let b64 = canvas.toDataURL()


      FileSharer.share({
        filename:'Assadiq-images' +  Date.now() + ".jpg",
        contentType: "image/jpg",
        // If you want to save base64:
        base64Data: b64.split(',')[1],
   
    }).then(() => {
        // do sth
    }).catch(error => {
      
    });


    }
    
    })
  })

  }else{
  let videoel : any = this.videoplayerel.nativeElement;

ctx.drawImage(videoel, 0, 0,1980,1980);
ctx.font = "100px serif";
ctx.textAlign = 'center';
ctx.textBaseline = 'center';
ctx.fillStyle = "#800000";

ctx.fillText("ASSADIQ", canvas.width / 2, canvas.height / 2);

let b64 = canvas.toDataURL()


FileSharer.share({
  filename:'Assadiq-images' +  Date.now() + ".jpg",
  contentType: "image/jpg",
  // If you want to save base64:
  base64Data: b64.split(',')[1],

}).then(() => {
  // do sth
}).catch(error => {
 
});

}

    }



    addEmojitotextarea(ev:any ) {
      console.log(ev)


      if(ev.emoji.native){
this.textareavideomeassage.value = this.textareavideomeassage.value + ev.emoji.native
}

      //this.showemojidiv = false;

  }


  sendmessagetoothersvideos(input:any,id:any) {
    console.log(id)
 
    if(input.value.length > 0) {
      if(id) {
    this.socket.emit('messagevideo',{
      idother:id,
      text:input.value,
      idme:this.userid,
   })

  input.value = ''
  this.opentoastsent = true;
}else{
  this.socket.emit('messagevideopublic',{
    text:input.value,
 })

input.value = ''
this.opentoastsent = true;

}
}

  }

  onWillDismissuseredit(ev:any) {
    this.showmodaleditnameuser= false;
    this.openphoneditmodal= false;
    this.showmodaluserconnected= false;
  }


  onWillDismissprofile(ev:any) {
    this.showmodaluserprofile = false;
    this.showmodaluserclicked = false;
    
  }

  onWillDismissuservideos(ev:any) {
    this.showmodaluservideos = false;
  
    this.showmodalnotifications = false;
  }
  ondidPresentprofile(ev: any) {
  //this.setqr()  ;
   let d = new  Date(this.userbirthday)


   let age = new dobToAge.AgeFromDate(d)
   console.log(age);
   this.userage = age.age
   this.userbirthday = d.toISOString();
   console.log(this.userbirthday);

   this.storage.set('userage',[this.userage,this.userbirthday]);

if(this.listofgender.length === 0) {
this.listofgender = genderOptions.standard

}


  }

  setqr() {
    const element : any = document.querySelector("#canvasqrid");

  const qrCode = new QRCodeStyling.default({
    width:100,
    height: 100,
    type: "svg",
    data: this.username  ? this.username + ' ' + this.userdescription :  'Assadiq' ,
    dotsOptions: {
        color: "#800000",
        type: 'square'
    },
    backgroundOptions: {
        color: "#e9ebee",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
});

qrCode.append(element);

}

saveusername(input:any) {
  this.username = input.value;
this.storage.set('username',this.username);
this.showmodaleditnameuser = false;
this.opentoastsaved = true;

}


saveuserdescription(input:any) {
  this.userdescription = input.value;
this.storage.set('userdescription',this.userdescription);

this.opentoastsaved = true;

}

saveuserphonenumber(input:any) {
  this.userPhoneNumber = input.value;
this.storage.set('userPhoneNumber',this.userPhoneNumber);

this.opentoastsaved = true;

}


changedateofbirth(ev:any) {
let d = new  Date(ev['detail']['value'])


let age = new dobToAge.AgeFromDate(d)
console.log(age);
this.userage = age.age;
this.userbirthday = d.toISOString();
console.log(this.userbirthday);

this.storage.set('userage',[this.userage,this.userbirthday]);

}


selectusergender(ev:any) {
  this.usergender = ev['detail']['value'];
  console.log(this.usergender);
  
  this.storage.set('usergender',this.usergender);
}

saveaddressuser(){
  this.useraddress = this.addressonmap;

  this.storage.set('useraddress',this.addressonmap);
  this.showmodalmap = false;

}

openmapwithcoordinate(cor:any){
console.log(cor)
this.videorecivedplayingmap = cor
this.gotocordinnate= true;
this.showmodalmap = true;
}


openmapwithcoordinateaddress(address: any){
  this.videorecivedplayingmap
  this.gotocordinnate= true;
  this.showmodalmap = true;
  }


shareImagevideorecived(poster?: any){
  let canvas : any = document.querySelector("#canvassnapshot");
  let ctx = canvas.getContext('2d')
if(poster){
  fetch(poster).then(data => {
    
    return data.blob()
    }).then(data => {
    
      blobToBase64(data).then(b64 => {
     
      

      
      let img = new Image();
      img.src = b64
      img.onload = ()=> {
      ctx.drawImage(img, 0, 0,1980,1980);
      ctx.font = "100px serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'center';
      ctx.fillStyle = "#800000";
      
      ctx.fillText("ASSADIQ", canvas.width / 2, canvas.height / 2);
      
      let b64 = canvas.toDataURL()


      FileSharer.share({
        filename:'Assadiq-images' +  Date.now() + ".jpg",
        contentType: "image/jpg",
        // If you want to save base64:
        base64Data: b64.split(',')[1],
   
    }).then(() => {
        // do sth
    }).catch(error => {
      
    });


    }
    
    })
  })


}else{
let videoel : any = this.videoplayerelrecived.nativeElement;
let canvas : any = document.querySelector("#canvassnapshot");
let ctx = canvas.getContext('2d');
console.log(canvas)
ctx.drawImage(videoel, 0, 0,1980,1980);
ctx.font = "100px serif";
ctx.textAlign = 'center';
ctx.textBaseline = 'center';
ctx.fillStyle = "#800000";

ctx.fillText("ASSADIQ", canvas.width / 2, canvas.height / 2);

let b64 = canvas.toDataURL()


FileSharer.share({
  filename:'Assadiq-images' +  Date.now() + ".jpg",
  contentType: "image/jpg",
  // If you want to save base64:
  base64Data: b64.split(',')[1],

}).then(() => {
  // do sth
}).catch(error => {
 
});
}
}


userconnectedclicked(item:any) {
this.userclickeddata = item;
this.showmodaluserclicked = true;
}



uploadvideo() {

  const formData: FormData = new FormData();
let time = Date.now()

 formData.append('v1', this.videoblobtosend, 'Assadiq-videos' +  time + ".mp4");
  formData.append('typeresource', 'video');
 // formData.append('idofuser', this.userid);
  //formData.append('map', this.coordinateonmap);
 // formData.append('time', time.toString());
 // formData.append('description', descriptioninput.value);
this.http.post(this.urlserver + '/upload',formData,{
  'responseType':'text',
  'reportProgress':true,
  observe: "events"
})

.subscribe((data: any ) =>{ 
  this.showprogressupladingfile = true;
  console.log(data);
this.progressuploadingfile = (data.loaded / data.total) *  100;
if(data.loaded === data.total){ 

}
},err =>{
  this.showprogressupladingfile = false;

 })

}


rangeChangevideorecivedtime(ev:any ) { 

this.videoplayerelrecived.nativeElement.currentTime = this.rangetimervideorecivedvalue.value
}

videorecivedupdatetime( ) { 
this.rangetimervideorecivedvalue.value = this.videoplayerelrecived.nativeElement.currentTime

}

onWillDismissproductcomment(ev:any ) { 
  this.showmodalcommentproduct = false;

}


openmodalcommentsproducts(itemid:any,comments:any ) { 
  console.log(itemid);
  console.log(comments);
  this.productidtocomment = itemid;
  this.listofcomments = comments
  this.showmodalcommentproduct = true;
 
}



  
onRatingSetproduct(rating: number): void {
  console.log(rating);

  this.ratingDisplayproduct = rating;
}

addcommentratingtoproduct(comment: any){
  if (comment.value.length > 0) {
    let time = Date.now();
  this.http.post(this.urlserver + '/editproductdata',{
    'id':this.productidtocomment,
    'comment':{
      comment : comment.value,
      time : time,

    } ,
    
  },{
    'responseType':'text'
  }).subscribe((data: any ) =>{ 
console.log(data )
  })
  this.listofcomments.unshift({
    comment : comment.value,
    time : time,

  }  )
  comment.value = '';
  this.opentoastsent = true
}

}


userchangelocationtoggle(ev:any ){
  console.log(ev )

  Geolocation.getCurrentPosition().then(location => {
   
    console.log(location )
  this.currentuserlocation = [location.coords.latitude,location.coords.longitude]
    let el = this.litofimagesuploded
  this.litofimagesuploded = [];
  this.litofimagesuploded  = el;
    
   
    }).catch(err => {
    
      NativeSettings.openAndroid({
        option: AndroidSettings.Location,
      });
    
    })

}

onSearchChangeProducts(ev:any ){
  console.log(ev )

}


focussearchproductinput(ev:any ){
  console.log('ev' )
this.showtogglelocationuser = false;
}


blursearchproductinput(ev:any ){
  console.log('ev' )
this.showtogglelocationuser = true;
}



}