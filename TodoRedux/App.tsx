import React from 'react'
import Todo from './src/screen/Todo/Todo'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>

  )
}
export default App;