import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice';



const store = configureStore({
  reducer :{
    todo :  todoReducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store








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