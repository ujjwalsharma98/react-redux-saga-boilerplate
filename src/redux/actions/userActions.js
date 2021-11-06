import Axios from 'axios';
import * as constants from './../actionTypes'


export const getUserList = () => ({
    type: constants.GET_USER_LIST
});