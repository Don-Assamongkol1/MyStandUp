import ColumnContainer from './components/ColumnContainer';
import Header from './components/Header';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch('/subscribers/', {})
      .then((res) => res.json())
      .then((data) => console.log(data))

      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <ColumnContainer />
    </div>
  );
}

export default App;
