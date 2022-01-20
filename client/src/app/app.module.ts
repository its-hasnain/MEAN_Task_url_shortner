import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
