import { FETCH_POST, FETCH_POSTS } from "../actions";

const INITIAL_STATE = {all: [], post: null};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        case FETCH_POST:
            return {...state, post: action.payload.data};
    }
    return state;
}