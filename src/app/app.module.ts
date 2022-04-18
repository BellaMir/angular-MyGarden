import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FlowersComponent } from './pages/flowers/flowers.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FormErrorsComponent } from './shared/components/form-errors/form-errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlowersDetailComponent } from './pages/flowers-detail/flowers-detail.component';
import { FlowerCardComponent } from './pages/flowers-detail/flower-card/flower-card.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { SearchComponent } from './shared/components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FlowersComponent,
    GalleryComponent,
    FormErrorsComponent,
    FlowersDetailComponent,
    FlowerCardComponent,
    SearchPipe,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
