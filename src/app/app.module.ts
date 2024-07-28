import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { PollsComponent } from './polls/polls.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgChartsModule  } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './Admin/admin.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage';
import { SignupComponent } from './signup/signup.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { MarketHomeComponent } from './market-home/market-home.component';
import { PollEntryPageComponent } from './poll-details/poll-entry-page/poll-entry-page.component';
import { MarketDetailsComponent } from './market-details/market-details.component';
import { FooterComponent } from './footer/footer.component';
import { NgxTwitterWidgetsModule } from "ngx-twitter-widgets";
import { BlogAreaComponent } from './blog-area/blog-area.component';
import {MatDialogModule} from '@angular/material/dialog';
import { VoteLoginDialogComponent } from './vote-login-dialog/vote-login-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { register } from 'swiper/element/bundle';
import { MarketDetailsTableComponent } from './market-details-table/market-details-table.component';
// register Swiper custom elements
register();

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    PollsComponent,
    SignupComponent,
    LoginComponent,
    MarketHomeComponent,
    PollEntryPageComponent,
    MarketDetailsComponent,
    FooterComponent,
    BlogAreaComponent,
    VoteLoginDialogComponent,
    MarketDetailsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    NzTableModule,
    NgChartsModule,
    NgApexchartsModule,
    NzDropDownModule,
    NzGridModule,
    NzSkeletonModule,
    NzButtonModule,
    ReactiveFormsModule,
    NgxTwitterWidgetsModule,
    AdminModule,
    MatTableModule,
    MatDialogModule,
    NgxPaginationModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(()=> getStorage()),
    provideAuth(()=> getAuth())
  ],
  providers: [
  
  
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA  ]
})
export class AppModule { }
