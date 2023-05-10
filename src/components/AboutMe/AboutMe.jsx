import React from "react";
import './AboutMe.css'
import {descriptionAboutMe, softSkills} from "../../assets/texts";

export const AboutMe = () => {
    return (
        <div id='main' className={'about-me-content'}>
            <div className={'about-me-content__description'}>
                <h1>About Me</h1>
                <span>{descriptionAboutMe}</span>
            </div>
            <div className={'skills-area'}>
                <div className={'hard-skills-area'}>
                    <h1>Hard skills</h1>
                    <p>JS</p>
                    <p>CSS (SASS)</p>
                    <p>HTML5</p>
                    <p>React</p>
                    <p>Redux</p>
                </div>
                <div className={'soft-skills-area'}>
                    <h1>Soft skills</h1>
                    {softSkills.map((skill, i) => <span>{`${i + 1}. ${skill}`}</span>)}
                </div>
            </div>
        </div>
    )
}