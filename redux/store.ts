import { rootReducer } from './reducers/rootReducer';
import { createStore } from "redux";
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

interface State {

}

const makeStore: MakeStore<State> = (context: Context) => createStore(rootReducer);

export const wrapper = createWrapper<State>(makeStore, { debug: false });
