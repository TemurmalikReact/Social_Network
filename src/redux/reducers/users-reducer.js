import { followApi, usersApi } from "../../Api/api"
import { updateToggleDisabled, updateToggleFollow } from "../../Utils/object-helpers"

const SET_TOGGLE_FOLLOW = "social-network/users/SET_TOGGLE_FOLLOW" 
const SET_USERS = "social-network/users/SET_USERS"
const SET_USERS_PAGE = "social-network/users/SET_USERS_PAGE"
const SET_USERS_TOTAL_COUNT = "social-network/users/SET_USERS_TOTAL_COUNT"
const SET_USERS_TOGGLE_FETCH = "social-network/users/SET_USERS_TOGGLE_FETCH"
const SET_USERS_TOGGLE_DISABLED = "social-network/users/SET_USERS_TOGGLE_DISABLED"

const initialState = { 
  users: [ ],
  count: 100,
  portionCount: 10,
  totalCount: 0,
  page: 1,
  isFetching: false,
  followingProgress: [],
  followed: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOGGLE_FOLLOW: return {
      ...state, users: updateToggleFollow(state.users, action.id, { followed: action.followed })
    } 
    case SET_USERS: return { ...state,  users: action.users }
    case SET_USERS_PAGE: return { ...state,  page: action.page }
    case SET_USERS_TOTAL_COUNT: return { ...state, totalCount: action.totalCount }
    case SET_USERS_TOGGLE_FETCH: return { ...state, isFetching: action.isFetching }
    case SET_USERS_TOGGLE_DISABLED: return { 
      ...state, followingProgress: action.isFetching 
      ? [ ...state.followingProgress, action.id ] 
      : state.followingProgress.filter(id => id != action.id) 
    }
    default: return state;
  }
} 

export default usersReducer;

const setUsers = users => ({ type: SET_USERS, users });

const setTotalCount = totalCount => ({ type: SET_USERS_TOTAL_COUNT, totalCount });

const setToggleFetch = isFetching => ({ type: SET_USERS_TOGGLE_FETCH, isFetching });

export const setPage = page => ({ type: SET_USERS_PAGE, page });

export const setToggleDisabled = (id, isFetching) => ({ 
  type: SET_USERS_TOGGLE_DISABLED, id, isFetching
}); 

export const requestUsers = (page, count) => async (dispatch) => {
  dispatch(setPage(page)) 
  dispatch(setToggleFetch(true))
  const data = await usersApi.getUsers(page, count) 
  dispatch(setUsers(data.items))
  dispatch(setTotalCount(data.totalCount))
  dispatch(setToggleFetch(false))
}

const togglefollowSuccess = (id, followed) => ({ type: SET_TOGGLE_FOLLOW, id, followed });

const toggleFollow = async (dispatch, id, followed, api) =>  {
  dispatch(setToggleDisabled(id, true)) 
  const data = await api(id)
  if (data.resultCode === 0) { 
    dispatch(togglefollowSuccess(id, followed)) 
  }
  dispatch(setToggleDisabled(id, false))
}

export const follow = (id, isFollow) => async (dispatch) => {
  isFollow 
    ? toggleFollow(dispatch, id, true, followApi.follow) 
    : toggleFollow(dispatch, id, false, followApi.unfollow) 
} 