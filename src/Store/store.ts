import {  configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice';
import logger from "redux-logger";

const store = configureStore({
  reducer :{
    todo :  todoReducer
  },
  middleware : (getDefaultMiddleware)=>{
    return getDefaultMiddleware({thunk: true}).concat(logger)
  }
  
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store







//-----------Legacy Code
// import {createStore,compose} from 'redux'

// import {reducer} from './reducer'

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
//   }
  
//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     reducer, composeEnhancers());

// export default store;