import React, { useState } from 'react';
export const Context = React.createContext({})

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token')
    })
    const [users, setUser] = useState(() => {
        if(window.sessionStorage.getItem('user')){
           return JSON.parse(window.sessionStorage.getItem('user'))
        }
        return {
            email: '',
            photo: '',
            uid: 0,
            username: ''
        }
    })
    const value = {
        users,
        isAuth,
        setUser,
        activateAuth: (user) => {
            setIsAuth(true)
            window.sessionStorage.setItem('user', JSON.stringify(user))
            window.sessionStorage.setItem('token', user.token)
        },
        removeAuth: () => {
            setIsAuth(false)
            window.sessionStorage.removeItem('user')
            window.sessionStorage.removeItem('token')
            setTimeout(() => {
                window.location.reload()
            }, 1000)
            
        }
    }
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>;
}
export default {
    Provider,
    Consumer: Context.Consumer
}