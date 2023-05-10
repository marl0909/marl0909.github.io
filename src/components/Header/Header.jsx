import React, { useState} from "react";
import './Header.css'
import butMenuOpen from '../../assets/img/menu.png'
import butMenuClose from '../../assets/img/close-menu.png'
import {Link} from 'react-scroll'

export const Header = () => {
    let [isOpen, setIsOpen] = useState(false)

    const changeIsOpenInItems = () => {
        if(isOpen) setIsOpen(!isOpen)
    }

    return (
        <div className={'header-content'}>
            <nav className={'header-content__navbar'}>
                <div className={'header-content__logo'}>
                    <Link to="hero" spy={true} smooth={true} offset={-300} duration={500} >Portfolio</Link>
                </div>
                <ul className={'header-content__items'  + (isOpen ? ' open' : '')}>
                    <li className={'header-content__main'}>
                        <Link to="main" spy={true} smooth={true} offset={-100} duration={500} onClick={changeIsOpenInItems} >main</Link>
                    </li>
                    <li className={'header-content__projects'}>
                        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={changeIsOpenInItems} >projects</Link>
                    </li><
                    li className={'header-content__contacts'}>
                        <Link to="contacts" spy={true} smooth={true} offset={-100} duration={500} onClick={changeIsOpenInItems} >contacts</Link>
                    </li>
                </ul>
                <img onClick={() => setIsOpen(!isOpen)} className={'header-content__button-menu'} src={isOpen ? butMenuClose : butMenuOpen}/>
            </nav>

        </div>
    )
}