import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';



import  * as  jquery from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showscreenfirst = true
  constructor(
    private platform:Platform
  ) {
    StatusBar.setOverlaysWebView({ overlay: false }).catch(err=> {
      
      })
    StatusBar.setBackgroundColor({  
      'color': '#800000'
    }).catch(err=> {
     
      })
      this.platform.ready().then(err=> {
      
      })
      window.addEventListener('load',()=>{
        this.showscreenfirst = false;
        console.log('ready')
        });

  }


  pageloaded(){

  }





}
