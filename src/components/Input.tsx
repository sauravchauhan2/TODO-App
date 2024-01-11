import React from "react";

interface Iprop {
    setdata : Function,
     getdata : String | undefined
}

export default class Input extends React.Component<any>{
    

   
    handleText = (e: any) => {
        this.props.setdata(e.target.value);            
    }


render(){
    return(
        <>
         <input type="text" style={{ width: "23%", height: "27px", marginLeft: "50px" }} onChange={(e) => this.handleText(e)} value={String(this.props.getdata)} />
        </>
    )
}
    
}
