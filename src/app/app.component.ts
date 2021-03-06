import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { CacheService } from 'ionic-cache';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cache: CacheService
  ) {
    this.initializeApp();
    cache.setDefaultTTL(60*60);
  }

  initializeApp() {
    
    this.platform.ready().then(() => {

     this.cache.setDefaultTTL(60 * 60 );
     //this.cache.enableCache(true);
      this.cache.setOfflineInvalidate(false);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
