import React from "react"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Home from '../scenes/Home'

export default () => (
    <Switch>
        <Route path="/" exact component={() => <Redirect to="/home" />} />
        <Route path="/home" exact component={Home} />
    </Switch>
)