import React from 'react'
import { HelloContext } from '../contexts/hello-context';

const Message = () => {
  return (
    <HelloContext.Consumer>
      {
        ({message, toggleMessage}) => (
          <header className="App-header">
            <h1 className="App-title">{ message.firstWord + ' ' + message.secondWord }</h1>
            <button onClick={ toggleMessage }>Change Message</button>
          </header>
        )
      }
    </HelloContext.Consumer>
  )
}

export default Message