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
            <h2> User list </h2>

            {userList.map(user => (
                <p> {user.name} </p>
            ))}
        </div>
    );
}

export default Userlist;