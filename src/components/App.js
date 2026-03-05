
import React from "react";
import './../styles/App.css';

const App = () => {
const [count, setCount] = React.useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Button Counter</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <p>Button clicked {count} times</p>
    </div>
  )
}

export default App
