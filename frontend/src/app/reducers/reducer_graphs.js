import {} from "../actions/index";

import {FETCH_GRAPHS} from '../actions/types';

const INITIAL_STATE = {graphs: []};

export default function (state, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    switch (action.type) {
        case FETCH_KEYWORD_ARTICLES:
            return {
                results: action.payload.data.graphs
            };
        default:
            return state;
    }
}