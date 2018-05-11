import React, { Component } from 'react'
// import logo from '../assets/images/logo.svg'
import '../styles/App.css'

import { HelloContext, messages } from '../contexts/hello-context'
import ButtonContext from '../contexts/button-context';
import Message from './Message'

class App extends Component {
  // This function strictly needs to be declared before initialising the state
  _toggleMessage = () => {
    this.setState(prevState => ({
      message:
        prevState.message === messages.message1
          ? messages.message2
          : messages.message1
    }))
  }

  state = {
    message: messages.message1,
    toggleMessage: this._toggleMessage,
  }
  

  render() {
    return (
      <HelloContext.Provider value={ this.state }>
        <ButtonContext.Provider value={{ title: 'Toggle Message' }}>
          <div className="App">
            <Message />
          </div>
        </ButtonContext.Provider>
      </HelloContext.Provider>
    )
  }
}

export default App
