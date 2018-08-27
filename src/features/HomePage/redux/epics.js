import 'rxjs';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/takeUntil'
import * as actions from './actions';
import {catchError, map, mergeMap, takeUntil} from 'rxjs/operators';
import {of} from 'rxjs';
import {combineEpics} from 'redux-observable';


export const fetchTrending = (action$,store, {api}) =>
    action$.ofType(actions.TRENDING_LOADING).pipe(
        mergeMap(() => {
            return api.trending().pipe(
                map(({response}) => {
                    return actions.loadTrendingSuccess(response.data);
                }),
                catchError(error => {
                    return of(actions.loadTrendingError(error));
                }),
                takeUntil(action$.ofType(actions.TRENDING_ERROR))
            )
        })
    );

export const fetchSearch = (action$,store,{api}) =>
    action$.ofType(actions.SEARCH_LOADING).pipe(
        mergeMap(action => {
            return api.search(action.payload)
                .pipe(
                    map(({response}) => {
                        return actions.loadSearchSuccess(response.data);
                    }),
                    catchError(error => {
                        return of(actions.loadSearchError(error));
                    }),
                    takeUntil(action$.ofType(actions.SEARCH_ERROR))
                );
        })
    );


export default combineEpics(
    fetchTrending,
    fetchSearch
);