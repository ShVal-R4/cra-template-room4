import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router
} from "react-router-dom"
import store from './redux/store'
import Routes from './navigation/Routes'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
