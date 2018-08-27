const TRENDING = 'TRENDING';
const SEARCH = 'SEARCH';

const LOADING = '_LOADING';
const SUCCESS = '_SUCCESS';
const ERROR = '_ERROR';

export const TRENDING_LOADING = TRENDING + LOADING;
export const TRENDING_SUCCESS = TRENDING + SUCCESS;
export const TRENDING_ERROR = TRENDING + ERROR;
export const SEARCH_LOADING = SEARCH + LOADING;
export const SEARCH_SUCCESS = SEARCH + SUCCESS;
export const SEARCH_ERROR = SEARCH + ERROR;


export const loadTrending = () => {
    return {
        type: TRENDING_LOADING
    }
};

export const loadTrendingSuccess = (items) => {
    return {
        type: TRENDING_SUCCESS,
        payload: items
    }
};

export const loadTrendingError = (error) => {
    return {
        type: TRENDING_ERROR,
        payload: error
    }
};

export const loadSearch = (searchValue) => {
    return {
        type: SEARCH_LOADING,
        payload: searchValue
    }
};

export const loadSearchSuccess = (item) => {
    return {
        type: SEARCH_SUCCESS,
        payload: item
    }
};

export const loadSearchError = (error) => {
    return {
        type: SEARCH_ERROR,
        payload: error
    }
};