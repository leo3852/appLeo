import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { BackgroundSectionComponent } from './components/background-section/background-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { AiApproachComponent } from './components/ai-approach/ai-approach.component';
import { RevealDirective } from './directives/reveal.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BackgroundSectionComponent,
    FooterComponent,
    AiApproachComponent,
    RevealDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
