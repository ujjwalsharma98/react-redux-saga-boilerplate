import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Userlist from './Pages/UserList'


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Userlist />
      </Provider>
    </div>
  );
}

export default App;