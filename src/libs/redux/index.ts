import { legacy_createStore, combineReducers } from "redux";
import { modalReducer } from "./modal";
export const store = legacy_createStore(combineReducers({ modalReducer }));
export type RootState = ReturnType<typeof store.getState>;
