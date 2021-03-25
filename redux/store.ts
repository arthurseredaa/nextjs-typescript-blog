import { rootReducer, RootState } from './reducers/rootReducer';
import { createStore } from "redux";
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore: MakeStore<RootState> = () => createStore(rootReducer, composeWithDevTools());

export const wrapper = createWrapper<RootState>(makeStore, { debug: false });
