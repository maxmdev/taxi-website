///import logo from './logo.svg';
import {useState, useEffect} from "react";
import './Styles.css';
import {Header} from './components/Header';
import {Partnership} from './components/Partnership';

function App() {
    const [landingPageData, setLandingPageData] = useState({});

  return (
      <div>
      <Header data={Header}/>
          <Partnership data={Partnership}/>
      </div>
  )
}

export default App;
