import { PostsActionTypes, SetPosts, SetComments, SetNewPost, DeletePost } from '../ts-types';

export const setPosts = (posts): SetPosts => ({ type: PostsActionTypes.SET_POSTS, payload: posts })

export const setNewPost = (post): SetNewPost => ({ type: PostsActionTypes.SET_NEW_POST, payload: post })

export const deleteThisPost = (id): DeletePost => ({ type: PostsActionTypes.DELETE_POST, payload: id })

export const setComments = (comments): SetComments => ({ type: PostsActionTypes.SET_COMMENTS, payload: comments })

export const setNewComment = (comment, id) => ({ type: PostsActionTypes.SET_NEW_COMMENT, payload: { comment, id } })
