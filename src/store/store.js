import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import { randomReducer } from '../features/RandomPage/redux/reducer';
import { homeReducer } from '../features/HomePage/redux/reducer'
import { createEpicMiddleware , combineEpics  } from 'redux-observable';
import { fetchRandom } from '../features/RandomPage/redux/epics'
import { fetchTrending } from '../features/HomePage/redux/epics'
import { fetchSearch } from '../features/HomePage/redux/epics'
import api from '../api/api'

const rootReducer = combineReducers({
    random: randomReducer,
    home: homeReducer,
});

const rootEpic = combineEpics(
    fetchRandom,
    fetchTrending,
    fetchSearch
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware({
    dependencies : {
        api
    }
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}


// const epicMiddleware = createEpicMiddleware(rootEpic, {
//     dependencies: {
//         api
//     }
// });

// const store = createStore(
//     rootReducer,
//     composeEnhancers(
//         applyMiddleware(epicMiddleware)
//     )
// );

// export default store;
