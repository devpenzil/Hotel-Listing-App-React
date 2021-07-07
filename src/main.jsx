import React from 'react'
import ReactDOM from 'react-dom'
import store from './Store/Store'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)