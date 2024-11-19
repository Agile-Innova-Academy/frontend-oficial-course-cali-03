import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catSlice from "./slices/catSlice";
import rootSaga from "./sagas/catSagas";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore ({
    reducer:{
        cats: catSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;