import { createContext, useEffect, useState } from 'react'

export const ToastContext = createContext()

export const ToastContextProvider = ({children}) => {

    const [toasts, setToasts] = useState([])

    const addToast = (message, type ) => {

        let toast = {
            message: message, 
            type: type,
            id: Date.now(),
        }
        setToasts( prevToasts => [toast, ...prevToasts ])
        setTimeout(() => {
            setToasts(prevToasts => prevToasts.filter(t => (
                t.id !== toast.id
            )))
        }, 4000)
    }

    const closeToast = (id) => {
        setToasts(prevToasts => prevToasts.filter(t => (
            t.id !== id
        )))
    }

    return (
        <ToastContext.Provider value={{toasts, setToasts, addToast, closeToast}} >
            {children}
        </ToastContext.Provider>
    )
}