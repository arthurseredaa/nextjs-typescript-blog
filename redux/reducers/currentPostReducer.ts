import { PostsAction, PostsActionTypes } from './../ts-types';

const initialState = {
  comments: [],
  currentPost: null,
  isUpdate: false
}

export const currentPostReducer = (state = initialState, action: PostsAction) => {
  switch(action.type) {
    case PostsActionTypes.SET_COMMENTS:
      return {...state, comments: [...action.payload]};
    case PostsActionTypes.SET_NEW_COMMENT:
      return {...state, comments: [...state.comments, {body: action.payload.comment, id: action.payload.id}]}
    case PostsActionTypes.SET_IS_UPDATE:
      return {...state, isUpdate: action.payload}
    case PostsActionTypes.SET_CURRENT_POST:
      return {...state, currentPost: action.payload}
    default:
      return state;
  }
}
