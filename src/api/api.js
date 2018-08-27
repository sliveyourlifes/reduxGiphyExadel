import randomWords from 'random-words'
import {ajax} from 'rxjs/ajax';

const RANDOM_URL = 'https://api.giphy.com/v1/gifs/random?';
const TRENDING_URL = 'http://api.giphy.com/v1/gifs/trending?';
const SEARCH_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '3whiADS5q2I87ugJpVmZqjPraaI11u5a';
const limitValue = 6

const api  = {

    random: () => {
        const randomTag = randomWords();
        console.log(randomTag);

        return ajax({
            url: `${RANDOM_URL}api_key=${API_KEY}&tag=${randomTag}`,
            method: 'GET',
            responseType: 'json'
        });
    },

    trending: () => {
        return ajax({
            url: `${TRENDING_URL}api_key=${API_KEY}&limit=${limitValue}`,
            method: 'GET',
            responseType: 'json'
        })
    },

    search: (searchValue) => {
        return ajax({
            url: `${SEARCH_URL}${searchValue}&api_key=${API_KEY}&limit=${limitValue}`,
            method: 'GET',
            responseType: 'json'
        })
    }
}

export default api;