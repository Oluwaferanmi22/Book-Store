import React from 'react'
import {AllRoutes} from './routes/AllRoutes'
import { Header, Footer } from './component'
export const App = () => {
  return (
    <div className='App dark:bg-dark'>
      <Header/>
      <AllRoutes />
      <Footer/>

    </div>
  )
}

