import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './rtk/store'
// import { storeRedux } from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* <Provider store={storeRedux}> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </Provider> */}
  </React.StrictMode>
)
