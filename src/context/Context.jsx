import React, { useState } from 'react';
export const Context = React.createContext({})

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token')
    })
    const value = {
        isAuth,
        activateAuth: (token, uid) => {
            setIsAuth(true)
            window.sessionStorage.setItem('uid', uid)
            window.sessionStorage.setItem('token', token)
        },

        removeAuth: () => {
            setIsAuth(false)
            window.sessionStorage.removeItem('uid', uid)
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