import './Styles.css';
import {Header} from './components/Header';
import {Partnership} from './components/Partnership';
import {Partners} from "./components/Partners";
import {Reviews} from "./components/Reviews";
import {Workflow} from "./components/Workflow";
import {Footer} from "./components/Footer";
import {Notification} from "./components/Notification/Notification";

function App() {
    return (
        <>
            <Header data={ Header }/>
            <Partnership data={ Partnership }/>
            <Partners data={ Partners }/>
            <Reviews data={ Reviews }/>
            <Workflow data={ Workflow }/>
            <Footer data={ Footer }/>
            <Notification/>
        </>
    )
}

export default App;
