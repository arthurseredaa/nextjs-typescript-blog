interface PostItem {
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Array<PostItem>
}

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  SET_POSTS = "SET_POSTS",
  SET_NEW_POST = "SET_NEW_POST",
  DELETE_POST = "DELETE_POST",
  FETCH_COMMENTS = "FETCH_COMMENTS",
  SET_COMMENTS = "SET_COMMENTS",
  SET_NEW_COMMENT = "SET_NEW_COMMENT",
  SET_IS_UPDATE = "SET_IS_UPDATE",
  SET_CURRENT_POST = "SET_CURRENT_POST",
}

export interface SetPosts {
  type: PostsActionTypes.SET_POSTS,
  payload: Array<PostItem>
}

export interface SetNewPost {
  type: PostsActionTypes.SET_NEW_POST,
  payload: {body: string, title: string, id: number | string}
}

export interface DeletePost {
  type: PostsActionTypes.DELETE_POST,
  payload: number | string
}

export interface SetComments {
  type: PostsActionTypes.SET_COMMENTS,
  payload: Array<any>
}

export interface SetNewComment {
  type: PostsActionTypes.SET_NEW_COMMENT,
  payload: {comment: string, id: string},
}

export interface SetIsUpdate {
  type: PostsActionTypes.SET_IS_UPDATE,
  payload: boolean
}

export interface SetCurrentPost {
  type: PostsActionTypes.SET_CURRENT_POST,
  payload: number | string
}

export type PostsAction = SetPosts | SetComments | SetNewComment | SetNewPost | DeletePost | SetIsUpdate | SetCurrentPost;
