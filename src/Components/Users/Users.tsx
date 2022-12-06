import React from "react";
import {initialUsersStateType, userTypeForUserReducer} from "../State/users-reducer";
import axios from "axios";
import UserPhoto from '../../assets/images/istockphoto.jpg'

type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<userTypeForUserReducer>) => void
    users: initialUsersStateType
}

export const Users = ({users, setUser, follow, unfollow}: UsersType) => {
    if(users.users.length === 0){
     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        setUser(response.data.items)
    })}

    return (
        <div>
            {

                users.users.map(u => <div key={u.id} style={{margin:'5px'}}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : UserPhoto} style={{width: '10%'}} alt={'avatar'}/>
                    </div>
                    <div>
                        {u.followed
                            ?
                            <button onClick={() => {
                                unfollow(u.id)
                            }}>Unfollow</button>
                            :
                            <button onClick={() => {
                                follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                    <div>
                        <h3>name: {u.name}</h3>
                        <span>{u.status}</span>
                        <ul>
                            <li>{'u.location.city'}</li>
                            <li>{'u.location.country'}</li>
                        </ul>
                    </div>
                </div>)
            }
        </div>
    )
}