import * as constants from './../actionTypes'


const initialState = {
    userList: [],
    userDetail: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_USER_LIST_SUCCESS:
            return {
                ...state,
                userList: action.payload
            };
        default:
            return state; 
    }

};