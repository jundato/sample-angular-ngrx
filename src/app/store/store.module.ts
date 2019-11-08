import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MetaReducer, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';


import { reducers } from '.';
import { EffectsModule } from '@ngrx/effects';
import { FeatureAEffects } from './effects/featurea.effects';

@NgModule({
    imports  : [
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([FeatureAEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: []
})

export class AppStoreModule
{
}
