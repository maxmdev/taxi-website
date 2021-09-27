import {useState, useEffect} from "react";
import './Styles.css';
import {Header} from './components/Header';
import {Partnership} from './components/Partnership';
import {Partners} from "./components/Partners";

function App() {
    const [landingPageData, setLandingPageData] = useState({});

  return (
      <>
          <Header data={Header}/>
          <Partnership data={Partnership}/>
          <Partners data={Partners}/>
      </>
  )
}

export default App;
