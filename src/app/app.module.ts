import { DataServiceMocksService } from './mocks/data-service-mocks.service';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataServiceService } from './services/data-service.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    SqliteDbCopy,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite,
    { provide: DataServiceService, useClass: DataServiceService}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private sqliteDbCopy: SqliteDbCopy) {
    this.sqliteDbCopy.copy('Horario16.db', 0)
    .then((res: any) => console.log('copiando bbd correcto', res))
    .catch((error: any) => console.error('copiando bbdd error', error));
  }
 }
