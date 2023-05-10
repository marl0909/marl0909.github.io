import React from "react";
import './Hero.css';
import logoInst from './../../assets/img/logo-instagram.png';
import logoFacebook from './../../assets/img/logo-facebook.png';
import logoLinkedin from './../../assets/img/logo-linkedin.png';
import logoGithub from './../../assets/img/icon-github.png';
import personPhoto from './../../assets/img/personal-photo.png';


export const Hero = () => {
    return (
        <div id='hero' className={'hero-area'}>
            <div className={'personal-content'}>
                <div className={'personal-content__info'}>
                    <span className={'personal-content__info__name'} style={{fontWeight: 700}}>Taras Kolesnyk</span>
                    <span className={'personal-content__info__position'}
                          style={{fontWeight: 700}}>React Developer</span>
                    <div className={'social-media-area'}>
                        <a className={`social-media-area__item`}  href={'https://github.com/marl0909'}
                           target='_blank'>
                            <img className={'social-media-area__item__github'} src={logoGithub} alt=""/>
                        </a>
                        <a className={`social-media-area__item linkedin`} href={'https://www.linkedin.com/in/taras-kolesnyk-269806275/'}
                           target='_blank'>
                            <img className={'icon'} src={logoLinkedin} alt=""/>
                        </a>
                    </div>
                </div>
                <div className={'personal-content__photo'}>
                    <img src={personPhoto} alt=""/>
                </div>
            </div>
        </div>

    )
}