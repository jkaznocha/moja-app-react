import React, { Component } from 'react';
import classes from './Border.module.css';
import PageLists from './PageLists/PageList';
import Navi from '../Head/Navi/Navi';
import Start from './Start/Start';
import PageY from './Pages/Page/PageY/PageY';
import PageR from './Pages/Page/PageR/PageR';
import PageB from './Pages/Page/PageB/PageB';
import PageG from './Pages/Page/PageG/PageG';

class Border extends Component{

    state={
        page1:"{page1}",
        onOff: true,
        tomik: false,
        lit:"S",
    }

    show =(litera)=>{
    this.setState({lit:litera})
    }

    render(){  

        let tom = null;
        let disableY = null;
        let disableR = null;
        let disableB = null;
        let disableG = null;

        switch(this.state.lit){
            case ("Y"):
                tom=(<PageY/>);
                disableY=!disableY;
                break;
            case ("R"):
                tom=(<PageR/>);
                disableR=!disableR;
                break;
            case ("B"):
                tom=(<PageB/>);
                disableB = !disableB;
                break;
            case ("G"):
                tom=(<PageG/>);
                disableG =!disableG;
                break;
            default:
            tom=(<Start/>)
        };
            
        
        return(
                <div className={classes.Border}>
                <Navi 
                show={this.show} 
                tomikY={disableY}
                tomikR={disableR}
                tomikB={disableB}
                tomikG={disableG}
                />
                <PageLists/> 
                {tom}
                </div>
            )
    };
}

export default Border;