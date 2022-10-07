export type dialogType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

export type postType = {
    id: number
    message: string
    like: number
    dislike: number
}

export type ProfilePageType = {
    posts: postType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: dialogType[],
    messages: messageType[],
    newMessageBody: string,
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}

export type storeType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: actionType) => void
}

export type actionType = addPostActionType | updateNewPostText | updateNewMessageText | addNewMessageText

export const addPostAC = (newPost: string) => {
    return {
        type: 'ADD-POST',
        newPost
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const                        //воспринимай как константу
}

export const updateNewMessageTextAC = (messageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        messageText
    } as const
}

export const addNewMessageTextAC = (newMessage: string) => {
    return {
        type: 'ADD-NEW-MESSAGE-TEXT',
        newMessage
    } as const
}

export type addPostActionType = ReturnType<typeof addPostAC>     //возвращаемый тип

export type updateNewPostText = ReturnType<typeof updateNewPostTextAC>

export type updateNewMessageText = ReturnType<typeof updateNewMessageTextAC>

export type addNewMessageText = ReturnType<typeof addNewMessageTextAC>

export let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!', like: 1, dislike: 3},
                {id: 2, message: 'Hello!', like: 2, dislike: 1},
                {id: 3, message: 'What?!', like: 5, dislike: 6},
                {id: 4, message: 'I love deep !!!', like: 7, dislike: 1},
                {id: 5, message: 'What is your name?', like: 2, dislike: 0},
            ],
            newPostText: 'Enter your text'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Josh'},
                {id: 2, name: 'Matt'},
                {id: 3, name: 'Fill'},
                {id: 4, name: 'Bob'},
                {id: 5, name: 'Cris'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Hello!'},
                {id: 3, message: 'Go!'},
                {id: 4, message: 'What!'},
                {id: 5, message: 'Ooo!'},
            ],
            newMessageBody: 'Enter your message'
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed!')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: actionType) {
        if (action.type === 'ADD-POST') {
            let NewMessage: postType = {
                id: 5,
                message: action.newPost,
                like: 0,
                dislike: 0
            };
            this._state.profilePage.posts.push(NewMessage);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageBody = action.messageText
            this._callSubscriber();
        } else if (action.type === 'ADD-NEW-MESSAGE-TEXT') {
            let message = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id:8, message})
            this._callSubscriber()
        }
    },
}

