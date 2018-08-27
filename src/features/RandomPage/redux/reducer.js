import {RANDOM_LOADING,RANDOM_SUCCESS,RANDOM_ERROR} from './actions'


const defaultState = {
    item: null,
    loading: false,
    error: null,
}

export const randomReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RANDOM_LOADING:
            {
                return {
                    ...state,
                    loading: true,
                };
            }
        case RANDOM_SUCCESS:
            {
                console.log(action.payload)
                return {
                    ...state,
                    loading: false,
                    item: action.payload
                }
            }
        case RANDOM_ERROR :
            {
                return {
                    ...state,
                    loading:false,
                    error:action.payload
                }
            }
        default : {
            return state;
        }
    }
}