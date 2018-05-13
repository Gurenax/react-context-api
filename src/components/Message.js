import React from 'react'
import { HelloContext } from '../contexts/hello-context';
import ButtonContext from '../contexts/button-context';
import { ActionContext } from '../contexts/action-context';

const Message = () => {
  return (
    <HelloContext.Consumer>
      {
        ({message, toggleMessage}) => (
          <header className="App-header">
            <h1 className="App-title">
              { message.firstWord + ' ' + message.secondWord }
            </h1>
            <ButtonContext.Consumer>
              {
                ({title}) => (
                  <div>
                    <button onClick={ toggleMessage }>
                      { title }
                    </button>
                    <ActionContext.Consumer>
                      {
                        ({alertMessage}) => (
                          <button onClick={
                            alertMessage(message.firstWord + ' ' + message.secondWord)
                          }>
                            Fire Title as Alert Message
                          </button>
                        )
                      }
                    </ActionContext.Consumer>
                  </div>
                )
              }
            </ButtonContext.Consumer>
          </header>
        )
      }
    </HelloContext.Consumer>
  )
}

export default Message