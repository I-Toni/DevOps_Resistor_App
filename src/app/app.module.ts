import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResistanceService } from './services/resistance.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ResistanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
