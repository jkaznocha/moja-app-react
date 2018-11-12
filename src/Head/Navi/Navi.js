import React from 'react';
import Book from './Book/Book';
import classes from './Navi.module.css';

const Navi = (props) => {
    return(
        <div className={classes.Navi}>
            <Book 
            show={props.show}
            tomikY={props.tomikY}
            tomikR={props.tomikR}
            tomikB={props.tomikB}
            tomikG={props.tomikG}
            />
        </div>
    )
};

export default Navi;