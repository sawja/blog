import React from 'react';
import { Link } from 'react-router-dom';

import style from './Post.scss';

import { truncateString } from '../../util/strings';

const Post = (props) => {
    const body = truncateString(props.post.body, 200);
    return (
        <div className={style.post}>
            <img src="https://via.placeholder.com/64x64" alt="" className={style.post__img}/>
            <div className={style['post__section']}>
                <span className={style['post__section_title']}>{props.post.title}</span>
                <span> x comments</span>
                <p className={style['post__section_body']}>{body}</p>
                <Link to={'posts/' + props.post.id} className={style.post__section__link}>read more</Link> 
            </div>
            
        </div>
    )
}

export default Post;