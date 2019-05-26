import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import reducers from '../redux/reducers'

export default class ProvideRedux extends Component {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  store = createStore(reducers, this.composeEnhancers(applyMiddleware()))

  render() {
    return (
      <Provider store={this.store} >
        { this.props.children }
      </Provider>
    )
  }
}
