import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { TopDestinationsComponent } from './components/home/top-destinations/top-destinations.component';
import { SpecialOffersComponent } from './components/home/special-offers/special-offers.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NewsComponent } from './news/news.component';
import { HotPromotionComponent } from './hot-promotion/hot-promotion.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { HeroIntroComponent } from './components/home/hero/hero-intro/hero-intro.component';
import { HeaderComponent } from './header/header.component';
import { DestinationComponent } from './components/home/top-destinations/destination/destination.component';
import { WeAreTjComponent } from './components/home/we-are-tj/we-are-tj.component';
import { TextComponent } from './components/home/we-are-tj/text/text.component';
import { OfferComponent } from './components/home/special-offers/offer/offer.component';
import { SecondHeroComponent } from './components/home/second-hero/second-hero.component';
import { NewsSourceComponent } from './news/news-source/news-source.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { FooterNavComponent } from './footer/footer-nav/footer-nav.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TravelDealsComponent } from './components/travel-deals/travel-deals.component';
import { DealComponent } from './components/travel-deals/deal/deal.component';
import { DealsHeaderComponent } from './components/travel-deals/deals-header/deals-header.component';
import { PricePipe } from './core/pipes/price.pipe';


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
    PageNotFoundComponent,
    TravelDealsComponent,
    DealComponent,
    DealsHeaderComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
        path: 'travel-deals',
        component: TravelDealsComponent
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
