import React from 'react'
import store from './store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Components
import Home from './component/Home';

const Main = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </Provider>

  )
}

export default Main;