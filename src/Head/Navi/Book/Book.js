import React from 'react';
import classes from './Book.module.css';
import '../../../asset/images/yellow.png';
import  '../../../asset/images/red.png';
import  '../../../asset/images/blue.png';
import  '../../../asset/images/green.png';


const Book = (props) => {

    return(
    <div className={classes.Navi}>
        <div className={classes.Book}>
            <button className ={classes.yellow} onClick ={()=>props.show("Y") } disabled={props.tomikY}></button>
            <button className ={classes.red} onClick = {()=>props.show("R")} disabled={props.tomikR}></button>
            <button className ={classes.blue} onClick = {()=>props.show("B")} disabled={props.tomikB}></button>
            <button className ={classes.green} onClick = {()=>props.show("G")} disabled={props.tomikG}></button>
      </div>
    </div>
    )
};

export default Book;