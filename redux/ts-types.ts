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

export interface setNewComment {
  type: PostsActionTypes.SET_NEW_COMMENT,
  payload: {comment: string, id: string},
}

export type PostsAction = SetPosts | SetComments | setNewComment | SetNewPost | DeletePost;
