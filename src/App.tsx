import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './Button';

function App (): ReactElement {
  // const [message, setMessage] = useState('no message');
  // useEffect(() => {
  //   console.log('the message is',message)
  // setMessage('hello Wolrd!')
  //   return () => {
  //     console.log('the message in return is',message)
  //   }
  // }, [message])
  const button = Button({ text: 'click', link: '#', color: 'Green' })
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            bla bla
          </a>
        </header>
      </div>
      {button}
    </>
  );
}

export default App;
