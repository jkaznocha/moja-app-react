import React, {Component} from 'react';
import classes from '../Tlo/Tlo.module.css';
import str from '../../../../../asset/images/pageb/str0.png';
import str1 from '../../../../../asset/images/pageb/str1.png';
import str2 from '../../../../../asset/images/pageb/str2.png';
import str3 from '../../../../../asset/images/pageb/str3.png';
import str4 from '../../../../../asset/images/pageb/str4.png';
import str5 from '../../../../../asset/images/pageb/str5.png';

 class Tlo extends Component{

    state = {
        stylel: 0,
        styleLeftarr:[{backgroundImage:'url('+str+')'}]
    }
  //  let styleL=0;
  changeNumber =(styleL)=>{
      let styleleft = styleL;
      styleleft++;
    
      this.setState({stylel:styleleft});

      this.changepageL(styleleft);
}
   


    changepageL=(styleL)=>{

        let strona = 'url('+str+')',
        strona1 = 'url('+str1+')',
        strona2 = 'url('+str2+')',
        strona3 = 'url('+str3+')',
        strona4 = 'url('+str4+')',
        strona5 = 'url('+str5+')'; 

       let styleLeftarr = [];
        
        switch (styleL){
            case(1):
            styleLeftarr=[{backgroundImage:strona1}];
            break;
            case(2):
            styleLeftarr=[{backgroundImage:strona2}];
            break;
            case(3):
            styleLeftarr=[{backgroundImage:strona3}];
            break;
            case(4):
            styleLeftarr=[{backgroundImage:strona4}];
            break;
            case(5):
            styleLeftarr=[{backgroundImage:strona5}];
            break;
            default:styleLeftarr=[{backgroundImage:strona}];
        }
        
        this.setState({styleLeftarr:styleLeftarr})
     }
/*
     changepageR=(nrpage)=>{
       let styleR='';
        let numberpage= nrpage+2;
        styleR="background-image: url('../../../../../asset/images/pageb/str"+numberpage+".png')";
        console.log(styleR)
        this.setState({styleR:styleR})
     }*/
    
       render(){ 
/*
        let strona = 'url('+str+')', 
        strona1 = 'url('+str1+')',
        strona2 = 'url('+str2+')',
        strona3 = 'url('+str3+')',
        strona4 = 'url('+str4+')',
        strona5 = 'url('+str5+')';   
*/
        console.log(this.state.stylel);
        console.log(this.state.styleLeftarr[0]);

        return(

        <div className={classes.Tlo}>
                <div className = {classes.container} >
                <div className={classes.left} style={this.state.styleLeftarr[0]} onClick={()=>this.changeNumber(this.state.stylel)} >
                </div>
                <div className={classes.right}>
                {this.props.children}
                </div>
                
            </div>
        </div>);}
 
 
};

 
    
    
	

export default Tlo;