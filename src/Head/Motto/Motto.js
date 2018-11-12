import React from 'react';
import classes from './Motto.module.css';
import Mojemotto from '../../asset/images/motto.png';

const Motto = (props) => {

    return (
        <div className={classes.Motto}>
            <img src={Mojemotto} alt="moje motto"/>
        </div>
    )
};

export default Motto;