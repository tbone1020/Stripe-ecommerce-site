import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeroComponent } from './home/hero/hero.component';
import { TopDestinationsComponent } from './home/top-destinations/top-destinations.component';
import { SpecialOffersComponent } from './home/special-offers/special-offers.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NewsComponent } from './news/news.component';
import { HotPromotionComponent } from './hot-promotion/hot-promotion.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavigationComponent } from './home/hero/navigation/navigation.component';
import { HeroIntroComponent } from './home/hero/hero-intro/hero-intro.component';
import { HeaderComponent } from './home/hero/header/header.component';
import { DestinationComponent } from './home/top-destinations/destination/destination.component';
import { WeAreTjComponent } from './home/we-are-tj/we-are-tj.component';
import { TextComponent } from './home/we-are-tj/text/text.component';
import { OfferComponent } from './home/special-offers/offer/offer.component';
import { SecondHeroComponent } from './home/second-hero/second-hero.component';
import { NewsSourceComponent } from './news/news-source/news-source.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { FooterNavComponent } from './footer/footer-nav/footer-nav.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
    NewsSourceComponent,
    ContactUsComponent,
    CopyrightComponent,
    FooterNavComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'aboutus', 
        component: AboutUsComponent 
      },
      { 
        path: '**', 
        component: PageNotFoundComponent 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
