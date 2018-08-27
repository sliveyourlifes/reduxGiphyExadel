const RANDOM = 'RANDOM';

const LOADING = '_LOADING';
const SUCCESS = '_SUCCESS';
const ERROR = '_ERROR';

export const RANDOM_LOADING = RANDOM + LOADING;
export const RANDOM_SUCCESS = RANDOM + SUCCESS;
export const RANDOM_ERROR = RANDOM + ERROR;


export const loadRandom = () => {
    return {
        type: RANDOM_LOADING
    }
};

export const loadRandomSuccess = (item) => {
    return {
        type: RANDOM_SUCCESS,
        payload: item
    }
};

export const loadRandomError = (error) => {
    return {
        type: RANDOM_ERROR,
        payload: error
    }
};