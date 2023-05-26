import * as React from 'react';
import './style.css';
import { EventEmitter } from './EventEmitter';

export default function App() {
  const handleOnClick = () => {
    EventEmitter.dispatch('eventName', 'The value I have sent From triggerer');
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={() => handleOnClick()}>Send</button>
    </div>
  );
}
