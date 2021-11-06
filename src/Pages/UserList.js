import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {getUserList} from '../redux/actions/userActions';


const Userlist = () => {

    const dispatch = useDispatch()

     useEffect(() => {
        dispatch(getUserList())
    }, [])

    const userList = useSelector((state) => state.userReducer.userList)

    console.log("userList >>>", userList)

    return (
        <div >
            User list
        </div>
    );
}

export default Userlist;