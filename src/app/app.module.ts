import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TopDestinationsComponent } from './top-destinations/top-destinations.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NewsComponent } from './news/news.component';
import { HotPromotionComponent } from './hot-promotion/hot-promotion.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavigationComponent } from './hero/navigation/navigation.component';
import { HeroIntroComponent } from './hero/hero-intro/hero-intro.component';
import { HeaderComponent } from './hero/header/header.component';
import { DestinationComponent } from './top-destinations/destination/destination.component';
import { WeAreTjComponent } from './we-are-tj/we-are-tj.component';
import { TextComponent } from './we-are-tj/text/text.component';
import { OfferComponent } from './special-offers/offer/offer.component';
import { SecondHeroComponent } from './second-hero/second-hero.component';
import { NewsSourceComponent } from './news/news-source/news-source.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TopDestinationsComponent,
    SpecialOffersComponent,
    FooterComponent,
    SubscribeComponent,
    NewsComponent,
    SecondHeroComponent,
    HotPromotionComponent,
    ExperiencesComponent,
    AboutUsComponent,
    NavigationComponent,
    HeroIntroComponent,
    HeaderComponent,
    DestinationComponent,
    WeAreTjComponent,
    TextComponent,
    OfferComponent,
    NewsSourceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
