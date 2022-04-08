import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCXhPf948FtuoyFZ_Jygfbyqq2YOZtb_oI",
  authDomain: "todomap-9bd73.firebaseapp.com",
  projectId: "todomap-9bd73",
  storageBucket: "todomap-9bd73.appspot.com",
  messagingSenderId: "1044828042678",
  appId: "1:1044828042678:web:8c429bdda5631bd5663d17",
  measurementId: "G-9NK7EDLM4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
  <React.StrictMode>
   <Context.Provider value={{firebase, auth, firestore}}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
