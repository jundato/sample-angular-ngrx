import { Action } from "@ngrx/store";


import * as actions from '../actions/featurea.action'
import { FeatureAState, initialState } from '../states/featurea.state';

export function featureAReducer(
    state = initialState,
    action: Action
  ): FeatureAState {
    switch (action.type) {
        case actions.CHANGE:
            return {...state};
        case actions.INCREASE:
            return {
                ...state,
                variableA: state.variableA + 1
            };
        case actions.DECREASE:
            return {
                ...state,
                variableB: state.variableB - 1
            };
        default:
            return state;
    }
}
