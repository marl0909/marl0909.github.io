import React, {useState} from "react";
import './ProjectBlock.css';
import githubIcon from './../../../assets/img/icon-github.png'

export const ProjectBlock = (props) => {

    return (
        <div className={'project-item'}>
            <a  className={'project-item__photo'} href={props.projectUrl} target='_blank'>
                <img src={props.projectPhoto}/>
                <div>
                    <span>{props.projectName}</span>
                </div>
            </a>
            <a className={'project-item__git-photo'} href={props.gitUrl} target='_blank' >
                <img src={githubIcon}/>
            </a>
            <div className={'project-item__description'}>
                <span style={{maxWeight: 400}}>{props.projectDescription}</span>
            </div>
        </div>
    )
}