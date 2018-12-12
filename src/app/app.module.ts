import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { BannerComponent } from './banner/banner.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';
import { SubbannerComponent } from './subbanner/subbanner.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { SubcardComponent } from './subcard/subcard.component';
import { StudentcardsComponent } from './studentcards/studentcards.component';
import { FooterbannerComponent } from './footerbanner/footerbanner.component';
import { FooterComponent } from './footer/footer.component';
import { FootercontentComponent } from './footercontent/footercontent.component';
import { FootercontentsComponent } from './footercontents/footercontents.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CategoriesComponent,
    SearchComponent,
    CartComponent,
    RegisterComponent,
    BannerComponent,
    Course1Component,
    Course2Component,
    Course3Component,
    SubbannerComponent,
    SubmenuComponent,
    SubcardComponent,
    StudentcardsComponent,
    FooterbannerComponent,
    FooterComponent,
    FootercontentComponent,
    FootercontentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
