import React from 'react'

import Home from './pages/Registration/home'

import { store } from '../redux/store'

import { Provider } from 'react-redux';

import Approutes from '../routes/AppRoutes';



export default function Register() {

  return (

    <div>

      <Provider store={store}>



  <Approutes/>

        </Provider>

    </div>

  )

}