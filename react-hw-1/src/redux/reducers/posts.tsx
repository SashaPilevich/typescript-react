import { IPost } from "../../types/post";
import { AnyAction } from "redux";
import { ACTIONS } from "../constans";

export interface IPostsState {
  likedPosts: IPost[];
  markedPosts: IPost[];
  allPosts: IPost[];
  isLoading: boolean;
  showLoadMore: boolean;
}
export const defaultState: IPostsState = {
  likedPosts: [],
  markedPosts: [],
  allPosts: [],
  isLoading: true,
  showLoadMore: false,
};

export const PostsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.LIKE_POST:
      const postLike = action.post;

      const newLikedPost = postLike.liked
        ? state.likedPosts.filter((item) => {
            if (item.id === postLike.id) {
              return false;
            } else {
              return true;
            }
          })
        : state.likedPosts.concat([{ ...postLike, liked: true }]);

      const newAllPostsLike = state.allPosts.map((post) => {
        if (post.id === action.post.id) {
          post.liked = !postLike.liked;
        }
        return post;
      });
      return {
        ...state,
        likedPosts: newLikedPost,
        allPosts: newAllPostsLike,
      };

    case ACTIONS.MARK_POST:
      const postMark = action.post;
      const newMarkPost = postMark.marked
        ? state.markedPosts.filter((item) => {
            if (item.id === postMark.id) {
              return false;
            } else {
              return true;
            }
          })
        : state.markedPosts.concat([{ ...postMark, marked: true }]);

      const newAllPostsMark = state.allPosts.map((post) => {
        if (post.id === action.post.id) {
          post.marked = !postMark.marked;
        }
        return post;
      });
      return {
        ...state,
        markedPosts: newMarkPost,
        allPosts: newAllPostsMark,
      };

    case ACTIONS.SET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.posts,
      };
    case ACTIONS.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case ACTIONS.SET_SHOW_LOAD_MORE:
      return {
        ...state,
        showLoadMore: action.showLoadMore,
      };
    default:
      return state;
  }
};
