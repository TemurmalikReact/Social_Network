const SET_MESSAGES_ADD_MESSAGE = "social-network/messages/SET_MESSAGES_ADD_MESSAGE"

const initialState = {
  messages: {
    img: "/logo192.png",
    details: [
      { id: 1, messageText: "Lorem ipsum dolor sit."},
      { id: 2, messageText: "Lorem ipsum dolor sit amet consectetur adipisicing what do you think is better query request or display grid and flex."},
      { id: 3, messageText: "Lorem ipsum dolor sit amet consectetur."},
      { id: 4, messageText: "Lorem ipsum dolor sit amet."},
    ],
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

const messagesReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case SET_MESSAGES_ADD_MESSAGE: return { 
      ...state, messages: {
      ...state.messages, details: [
      ...state.messages.details, { id: Math.random(), messageText: action.messageText } ]
    }}
    default: return state
  }
}

export default messagesReducer;

export const addMessage = messageText => ({ type: SET_MESSAGES_ADD_MESSAGE, messageText });