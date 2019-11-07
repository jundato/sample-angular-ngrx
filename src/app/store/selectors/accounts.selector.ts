import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureAState } from '../states/featurea.state';

export const name = 'featurea';
export const featureAStateSelector = createFeatureSelector<FeatureAState>(name);

export const variableASelector = createSelector(
    featureAStateSelector,
    (state: FeatureAState) => state.variableA
);

export const variableBSelector = createSelector(
    featureAStateSelector,
    (state: FeatureAState) => state.variableB
);