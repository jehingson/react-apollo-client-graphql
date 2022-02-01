import React, { useState } from 'react';
export const Context = React.createContext({})

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token')
    })
    const value = {
        isAuth,
        activateAuth: (user) => {
            setIsAuth(true)
            window.sessionStorage.setItem('user', JSON.stringify(user))
            window.sessionStorage.setItem('token', user.token)
        },
        removeAuth: () => {
            setIsAuth(false)
            window.sessionStorage.removeItem('user')
            window.sessionStorage.removeItem('token')
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