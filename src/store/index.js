import createSagaMiddleware from 'redux-saga';
import skillsReducer from '../reducers/skills';
import saga from '../saga';
import { configureStore } from '@reduxjs/toolkit'


    
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: {
        skills: skillsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  })


sagaMiddleware.run(saga);

export default store;
