///import logo from './logo.svg';
import {useState, useEffect} from "react";
import './Styles.css';
import {Header} from './components/Header';

function App() {
    const [landingPageData, setLandingPageData] = useState({});

  return (
      <Header data={Header}/>
  );
}

export default App;
