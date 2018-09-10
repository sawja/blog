import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import style from './Navbar.scss';

import Badge from '../common/badge/Badge';

const Navbar = (props) => (
    <div className={style.nav}>
        <Link to="/home" className={style['nav__title']}>{props.appTitle}</Link>
        <ul className={style['nav__list']}>
            <li className={style['nav__list__item']}>
                <Link to="/posts" className={style['nav__list__item__link']}>Posts</Link>
                <Badge number={props.numberOfPosts}/>
            </li>
        </ul>
    </div>
)

export default Navbar;