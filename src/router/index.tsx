import React from "react"
import { Route, Switch } from "react-router-dom"
// Pages
import Home from "../pages/Home"
import About from "../pages/About"

const router = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Switch>
)

export default router