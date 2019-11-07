import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MetaReducer, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';


import { reducers } from '.';

@NgModule({
    imports  : [
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: []
})

export class AppStoreModule
{
}
