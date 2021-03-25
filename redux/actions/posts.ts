import { PostsActionTypes, SetPosts, SetComments, SetNewPost, DeletePost, SetNewComment, SetIsUpdate, SetCurrentPost } from '../ts-types';

export const setPosts = (posts): SetPosts => ({ type: PostsActionTypes.SET_POSTS, payload: posts })

export const setNewPost = (post): SetNewPost => ({ type: PostsActionTypes.SET_NEW_POST, payload: post })

export const deleteThisPost = (id): DeletePost => ({ type: PostsActionTypes.DELETE_POST, payload: id })

export const setComments = (comments): SetComments => ({ type: PostsActionTypes.SET_COMMENTS, payload: comments })

export const setNewComment = (comment, id): SetNewComment => ({ type: PostsActionTypes.SET_NEW_COMMENT, payload: { comment, id } })


export const setIsUpdate = (bool):SetIsUpdate => ({type: PostsActionTypes.SET_IS_UPDATE, payload: bool})

export const setCurrentPost = (id):SetCurrentPost => ({type: PostsActionTypes.SET_CURRENT_POST, payload: id})
