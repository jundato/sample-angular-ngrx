import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states';
import { featureAReducer } from './featurea.reducer';

export const reducers: ActionReducerMap<AppState> = {
    featureAState: featureAReducer,
};
