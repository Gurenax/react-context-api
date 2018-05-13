import React from 'react'

// Returns a function to be invoked later when button is clicked
export const fireAlertMessage = (message) => () => {
  alert(message)
}

export const ActionContext = React.createContext({
  alertMessage: fireAlertMessage,
})
