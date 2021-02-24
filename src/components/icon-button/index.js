import React from 'react';
import './style.css';

export default function IconButton(props) {
    const [active, setActive] = React.useState(false)
    return (
        <button title={props.title} className="icon-button" onClick={()=>{
            setActive(!active)
            props.onClick(active)
        }}>
            <img className={active ? 'active' : null} src={ active ? props.activeImage : props.image}/>
        </button>
    )
}