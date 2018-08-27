import 'rxjs';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/takeUntil'
import * as actions from './actions';
import {catchError, map, mergeMap, takeUntil} from 'rxjs/operators';
import {of} from 'rxjs';
import {combineEpics} from 'redux-observable';


export const fetchRandom = (action$, store, {api}) =>
    action$.ofType(actions.RANDOM_LOADING).pipe(
        mergeMap(() => {
            return api.random().pipe(
                map(({response}) => {
                    return actions.loadRandomSuccess(response.data);
                }),
                catchError(error => {
                    return of(actions.loadRandomError(error));
                }),
                takeUntil(action$.ofType(actions.RANDOM_ERROR))
            )
        })
    );


export default combineEpics(
    fetchRandom
);