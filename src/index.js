import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingEffect from './components/loadingEffect/LoadingEffect';

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setIsLoading(false);
    };

    fetchData(); 

    
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return isLoading ? <LoadingEffect /> : <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Root />
  </Router>
);

reportWebVitals();
