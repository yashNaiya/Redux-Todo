import React from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import store from '../store/store'
import NavBar from './NavBar'

const Rootlayout = () => {
    return (
        <Provider store={store}>
            <NavBar/>
            <main>
                <Outlet />
            </main>
        </Provider>
    )
}

export default Rootlayout
