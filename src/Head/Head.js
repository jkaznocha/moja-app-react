import React from 'react';
import classes from './Head.module.css';
import Motto from './Motto/Motto';

const Head = (props) => {

    return (
        <div className = {classes.Head}>
            <Motto/>
        </div>

    )

};

export default Head;