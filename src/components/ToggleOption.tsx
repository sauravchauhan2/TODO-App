import React from "react";
import './style.css'

export default class ToggleOption extends React.Component <any>{


    showChange =(e: any)=>{
       (e.target.checked ) ? this.props.setCnt(true) : this.props.setCnt(false); 

       console.log(e.target.checked)
        this.props.showItem();
    }

    render() {
        
        return(
            <>
          
                <div style={{
                    marginTop: '-40px',
                    marginBottom : "20px",
                    display : "inline-flex"
                }}>
                <div>
                <label style={{fontSize : "20px",marginRight: "5px"}}>Light : </label>
                </div>
                <div>
                <label className ="switch">
                <input type ="checkbox" onClick={(e)=>{
                     this.showChange(e);
                }} />
                <span className ="slider round"/>
                </label>
                </div>
                </div>
            </>
        )
    }

}