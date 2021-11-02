import {useState, useEffect} from "react";
import './Styles.css';
import {Header} from './components/Header';
import {Partnership} from './components/Partnership';
import {Partners} from "./components/Partners";
import {Reviews} from "./components/Reviews";
import {Workflow} from "./components/Workflow";
import {Footer} from "./components/Footer";

function App() {
    const [landingPageData, setLandingPageData] = useState({});

    return (
        <>
            <Header data={ Header }/>
            <Partnership data={ Partnership }/>
            <Partners data={ Partners }/>
            <Reviews data={ Reviews }/>
            <Workflow data={ Workflow }/>
            <Footer data={ Footer }/>
        </>
    )
}

export default App;
