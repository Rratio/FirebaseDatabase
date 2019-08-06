import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import firebase from "react-native-firebase";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import Router from "./Router";

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyBR6LcbLf2_yBmMVKl2ypbmQG8D7kcceiE",
      authDomain: "fir-authentication-6b21f.firebaseapp.com",
      databaseURL: "https://fir-authentication-6b21f.firebaseio.com",
      projectId: "fir-authentication-6b21f",
      storageBucket: "fir-authentication-6b21f.appspot.com",
      messagingSenderId: "270811940114",
      appId: "1:270811940114:web:69ebb195ecd98772"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducer, {}, applyMiddleware(reduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
