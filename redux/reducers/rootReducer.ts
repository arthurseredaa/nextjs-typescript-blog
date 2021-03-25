import { currentPostReducer } from './currentPostReducer';
import { postsReducer } from './postsReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  posts: postsReducer,
  currentPost: currentPostReducer
})

export type RootState = ReturnType<typeof rootReducer>
