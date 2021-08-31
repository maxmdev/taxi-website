import {useState, useEffect} from "react";
import './Styles.css';
import {Header} from './components/Header';
import {Partnership} from './components/Partnership';

function App() {
    const [landingPageData, setLandingPageData] = useState({});

  return (
      <>
          <Header data={Header}/>
          <Partnership/>
      </>
  )
}

export default App;
