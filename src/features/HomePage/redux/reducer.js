import {
    TRENDING_LOADING,
    TRENDING_SUCCESS,
    TRENDING_ERROR,
    SEARCH_LOADING,
    SEARCH_SUCCESS,
    SEARCH_ERROR,
} from './actions'


const defaultState = {
    items: null,
    loading: false,
    error: null,
    searchvalue:'',
}

export const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TRENDING_LOADING:
            {
                return {
                    ...state,
                    loading: true,
                };
            }
        case TRENDING_SUCCESS:
            {
                console.log(action.payload)
                return {
                    ...state,
                    loading: false,
                    items: action.payload
                }
            }
        case TRENDING_ERROR :
            {
                return {
                    ...state,
                    loading:false,
                    error:action.payload
                }
            }
        case SEARCH_LOADING:
            {
                return {
                    ...state,
                    searchvalue:action.payload,
                    loading: true,
                };
            }
        case SEARCH_SUCCESS:
            {
                console.log(action.payload)
                return {
                    ...state,
                    loading: false,
                    items: action.payload
                }
            }
        case SEARCH_ERROR :
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