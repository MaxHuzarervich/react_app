import React from "react";
// export type storeType = {
//     _state: StateType
//     getState: () => StateType
//     _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: actionType) => void
// }

// let store: storeType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi!', like: 1, dislike: 3},
//                 {id: 2, message: 'Hello!', like: 2, dislike: 1},
//                 {id: 3, message: 'What?!', like: 5, dislike: 6},
//                 {id: 4, message: 'I love deep !!!', like: 7, dislike: 1},
//                 {id: 5, message: 'What is your name?', like: 2, dislike: 0},
//             ],
//             newPostText: 'Enter your text'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Josh'},
//                 {id: 2, name: 'Matt'},
//                 {id: 3, name: 'Fill'},
//                 {id: 4, name: 'Bob'},
//                 {id: 5, name: 'Cris'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hi!'},
//                 {id: 2, message: 'Hello!'},
//                 {id: 3, message: 'Go!'},
//                 {id: 4, message: 'What!'},
//                 {id: 5, message: 'Ooo!'},
//             ],
//             newMessageBody: 'Enter your message'
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//         console.log('State changed!')
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: actionType) {
//             this._state.profilePage = profileReducer(this._state.profilePage, action)
//             this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//             this._callSubscriber();
//     },
// }

