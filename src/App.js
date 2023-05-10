import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header.jsx";
import {Hero} from "./components/Hero/Hero";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";


export const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Hero/>
            <AboutMe/>
            <Projects/>
            <Contacts/>
        </div>
    );
}
