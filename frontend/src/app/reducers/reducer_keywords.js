import {} from "../actions/index";

import FETCH_KEYWORDS from '../actions/types';

const INITIAL_STATE = {keywords: []};

export default function (state, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    switch (action.type) {
        case FETCH_KEYWORDS:
            return {
                ...state,
                all: action.request,
            };
        default:
            return state;
    }
}