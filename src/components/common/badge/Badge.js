import React from 'react';

import style from './Badge.scss';

const Badge = (props) => (
    <span className={style.badge}>{props.number}</span>
)

export default Badge;