import profileReducer from "./reducers/profile-reducer"
import messagesReducer from "./reducers/messages-reducer"

const store = {
  _state: {
    profilePage: {
      myPosts: {
        img: "/logo192.png",
        details: [
          { id: 1, message: "Lorem"},
          { id: 2, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente minima commodi repudiandae consequatur consequuntur."},
          { id: 3, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio minima doloribus odio. Rem asperiores animi iste quibusdam, alias natus Blanditiis molestiae neque qui, unde doloremque aliquid facere atque vola."},
        ],
        postText: "",
        placeholder: "Your message goes here..."
      }
    }, 
    messagesPage: {
      messages: {
        img: "/logo192.png",
        details: [
          { id: 1, message: "Lorem ipsum dolor sit."},
          { id: 2, message: "Lorem ipsum dolor sit amet consectetur adipisicing what do you think is better query request or display grid and flex."},
          { id: 3, message: "Lorem ipsum dolor sit amet consectetur."},
          { id: 4, message: "Lorem ipsum dolor sit amet."},
        ],
        messageText: "",
        placeholder: "Your message goes here..."
      },
      dialogs: [
        { name: "Toshpo'lat", id: 1, img: ""},
        { name: "Toshmurod", id: 2, img: ""},
        { name: "Bekmurod", id: 3, img: ""},
        { name: "Alimurod", id: 4, img: ""},
        { name: "Jalilbek", id: 5, img: ""},
        { name: "Halilbek", id: 6, img: ""},
        { name: "Rahmonjon", id: 7, img: ""},
        { name: "Qahramonjon", id: 8, img: ""},
      ],
    }
  },
  _callSubscriber() { 
    return "No subscribers"
  },
  getState() { 
    return this._state 
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._callSubscriber()
  }
}

export default store;