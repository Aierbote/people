import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProvaServizioComponent } from './components/prova-servizio/prova-servizio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { RouterModule } from '@angular/router';
import { HomeSpaceComponent } from './components/home-space/home-space.component';
import { LinkZeldaComponent } from './components/link-zelda/link-zelda.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomeComponent, HomeSpaceComponent, LinkZeldaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // aggiunto per fare la card con Material Design
    ProvaServizioComponent,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
