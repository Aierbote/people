import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProvaServizioComponent } from './components/prova-servizio/prova-servizio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProvaImpiegatoComponent } from './components/prova-impiegato/prova-impiegato.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomeComponent, ProvaImpiegatoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // aggiunto per fare la card con Material Design
    ProvaServizioComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
