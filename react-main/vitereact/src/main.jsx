import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
      <div>
        <h1>Custom</h1>
      </div>
    )
}

/*const ReactElement = {
  type: 'a',
  props: {
      href: 'https://www.google.com',
      target: '_blank',
  },
  children: 'Click me!'
}*/

const anotherElement = ( 
<a href="https://google.com" target='_blank'>Visit!</a> 
)

const anotherUser = 'Jane Doe'

const ReactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click me!',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    /*<App />*/
    ReactElement
)
