import React from 'react';
import Navigation from './navigation/Navigation'
import './App.css';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store/configureStore';
import { loadData } from './actions/dataActions'

const store = configureStore()

store.dispatch(loadData())

export default class App extends React.Component{
  render(){
    let persistor = persistStore(store)
    return(
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navigation/>
          </PersistGate>
        </Provider>
    )
  }
}