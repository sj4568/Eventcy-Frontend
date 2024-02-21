import React from 'react'
import {RouterProvider} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js'

import routes from './components/RouterProviders/RouterProviders'
const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
