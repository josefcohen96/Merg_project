import React from "react";
// import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { applyMiddleware, componse } from "redux"
// import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import App from './App';
import { createRoot } from 'react-dom/client';

const store = configureStore({reducer: rootReducer})


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(    
    <Provider store={store}>
        <App />
    </Provider>
    );


// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     , document.getElementById('root'))

// const container = document.getElementById('');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);