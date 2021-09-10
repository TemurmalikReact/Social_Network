import { profileApi } from "../../Api/api"

const SET_PROFILE_ADD_POST = "social-network/profile/SET_PROFILE_ADD_POST" 
const SET_PROFILE = "social-network/profile/SET_PROFILE"
const SET_PROFILE_STATUS = "social-network/profile/SET_PROFILE_STATUS"
const SET_PROFILE_PHOTO = "social-network/profile/SET_PROFILE_PHOTO"

const initialState = {
  myPosts: {
    img: "/logo192.png",
    details: [
      { id: 1, postText: "Lorem"},
      { id: 2, postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente minima commodi repudiandae consequatur consequuntur."},
      { id: 3, postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio minima doloribus odio. Rem asperiores animi iste quibusdam, alias natus Blanditiis molestiae neque qui, unde doloremque aliquid facere atque vola."},
    ],
    text: ""
  },
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_ADD_POST: return {
      ...state, myPosts: {
      ...state.myPosts, details: [ 
      ...state.myPosts.details, { id: Math.random(), postText: action.postText } ] 
    }} 
    case SET_PROFILE: return { ...state, profile: action.profile }
    case SET_PROFILE_STATUS: return { ...state, status: action.status }
    case SET_PROFILE_PHOTO: return { ...state, profile: { ...state.profile, photos: action.photos }}
    default: return state;
  }
} 

export default profileReducer;

export const addPost = postText => ({ type: SET_PROFILE_ADD_POST, postText });

const setProfile = profile => ({ type: SET_PROFILE, profile });

const setStatus = status => ({ type: SET_PROFILE_STATUS, status });

const setPhotoSuccess = photos => ({ type: SET_PROFILE_PHOTO, photos });

export const requestProfile = userId => async (dispatch) => {
  const data = await profileApi.getProfile(userId) 
  dispatch(setProfile(data))
}  

export const requestStatus = userId => async (dispatch) => {
  const data = await profileApi.getStatus(userId)
  dispatch(setStatus(data))
}  

export const updateStatus = status => async (dispatch) => {
  const data = await profileApi.updateStatus(status) 
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}  

export const putPhoto = photos => async (dispatch) => {
  const data = await profileApi.putPhoto(photos) 
  if (data.resultCode === 0) {
    dispatch(setPhotoSuccess(data.data.photos))
  }
}  
  