import * as React from 'react';
import './style.css';
import { EventEmitter } from './EventEmitter';
import ValueTrigger from './ValueTrigger';

export default function App() {
  const [value, setValue] = React.useState('Empty Value');

  React.useEffect(() => {
    EventEmitter.subscribe('eventName', (dataFromEmitter) => {
      setValue(dataFromEmitter);
    });
  }, []);

  return (
    <div>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>{value}</p>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <ValueTrigger />
    </div>
  );
}
