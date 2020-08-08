const initialState = {
  userList: []
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_USERS':
      return {
        userList: action.newData
      }
    default:
      return state
  }
}

export default userReducer