import { PostsAction, PostsActionTypes } from '../ts-types';

const initialState = {
  posts: []
}

export const postsReducer = (state = initialState, action: PostsAction) => {
  switch(action.type) {
    case PostsActionTypes.SET_POSTS:
      return {...state, posts: [...action.payload]};
    case PostsActionTypes.SET_NEW_POST:
      return {...state, posts: [...state.posts, action.payload]}
    case PostsActionTypes.DELETE_POST:
      return {...state, posts: state.posts.filter(({id}) => id !== action.payload)}
    default:
      return state;
  }
}
