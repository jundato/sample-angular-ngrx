import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from './store/store.module';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ContainerComponent } from './pages/container/container.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ContainerComponent,
    ComponentBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
