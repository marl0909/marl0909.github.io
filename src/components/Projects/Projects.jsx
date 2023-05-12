import React from "react";
import './Projects.css'
import {ProjectBlock} from "./ProjectBlock/RrojectBlock";
import {useSelector} from "react-redux";


export const Projects = () => {
    const projects = useSelector(state => state.reducer.projects)

    return (
        <div id='projects' className={'projects-area'}>
            <h1>Projects</h1>
            <div className={'projects'}>
                {projects.map(project => <ProjectBlock projectName={project.name} projectUrl={project.url}
                                                       projectPhoto={project.photo} projectDescription={project.description}
                                                        gitUrl={project.gitUrl}/>)}
            </div>
        </div>
    )
}