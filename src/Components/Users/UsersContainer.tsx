import React from "react";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followAC, initialUsersStateType, setUsersAC, unfollowAC, userTypeForUserReducer} from "../State/users-reducer";
import {connect} from "react-redux";

type StateType = {
    usersPage: initialUsersStateType
}

type MapStateToPropsType = {
    users: initialUsersStateType
}

type MapDispatchToPropsType = {
    follow: (userID:number) => void
    unfollow: (userID:number) => void
    setUser: (users: Array<userTypeForUserReducer>) => void
}

let MapStateToProps = (state: StateType):MapStateToPropsType => {
    return {
        users: state.usersPage
    }
}

let MapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
    follow: (userID) => {dispatch(followAC(userID))},
    unfollow: (userID) => {dispatch(unfollowAC(userID))},
    setUser: (users) => {dispatch(setUsersAC(users))}
    }
}

export const SuperUsersContainer = connect(MapStateToProps,MapDispatchToProps)(Users)
