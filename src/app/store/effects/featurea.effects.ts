import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {switchMap, map, flatMap } from 'rxjs/operators';
import { Store, Action } from '@ngrx/store';
import { AppState } from '../states';
import { Observable } from 'rxjs';
import { CHANGE, Increase, Decrease } from '../actions/featurea.action';

@Injectable()
export class FeatureAEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  change$: Observable<Action> = this.actions$.pipe(
    ofType(CHANGE),
    flatMap(() => {
        return [new Increase(), new Decrease()];
    })
  );

}
