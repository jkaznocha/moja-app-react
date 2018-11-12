import React from 'react';
import classes from './PageList.module.css';
import PageNumber from './PageNumber/PageNumber';

const PageList = (props) => {
    
    return(
        <div className = {classes.PageList}>
            <PageNumber/>
        </div>
    )
};

export default PageList;