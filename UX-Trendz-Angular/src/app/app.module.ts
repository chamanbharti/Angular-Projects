import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopnavComponent } from './my-container/topnav/topnav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { Txtsec1Component } from './my-container/txtsec1/txtsec1.component';
import { Txtsec2Component } from './my-container/txtsec2/txtsec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { TwoWayComponent } from './databind/two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngx-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap';
import {CarouselModule} from 'ngx-bootstrap';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TVComponent } from './products/tv/tv.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { ServiceUtitlitiesService } from './appServices/service-utitlities.service';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TestDirective } from './appDirectives/test.directive';

const appRoutes:Routes = [
  {path:'login', redirectTo:'login', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'buy-products',component: ParentComponent},
  {path:'view-child',component: ViewChildComponent},

  {path:'products',component: ProductsComponent, children:[
    {path:'laptop',component: LaptopComponent},
    {path:'mobile',component: MobileComponent},
    {path:'washing-machine',component: WashingMachineComponent},
    {path:'tv',component: TVComponent}
  ]},
  
  {path:'**',component: PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    MobileComponent,
    TVComponent,
    WashingMachineComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    Card2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ViewChildComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServiceUtitlitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
