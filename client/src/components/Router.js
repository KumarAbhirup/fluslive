import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import indexPage from '../pages'
import streamCreate from '../pages/streamCreate'
import streamEdit from '../pages/streamEdit'
import streamDelete from '../pages/streamDelete'
import streamShow from '../pages/streamShow'
import failedPage from '../pages/failed'
import instructionsPage from '../pages/instructionsPage'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={indexPage} />
        <Route path="/instructions" exact component={instructionsPage} />
        <Route path="/streams/new" exact component={streamCreate} />
        <Route path="/streams/edit/:id" exact component={streamEdit} />
        <Route path="/streams/delete/:id" exact component={streamDelete} />
        <Route path="/streams/show/:id" exact component={streamShow} />
        <Route component={failedPage} />
      </Switch>
    )
  }
}
