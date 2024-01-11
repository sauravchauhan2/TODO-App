import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaBan } from "react-icons/fa"

export default class BtnOption extends React.Component<any>{

    editTdodo = (obj : any,index : any)=>{

        console.log("hii",index)
        // this.setState(
        //     {
        //         todoName : obj.todoName,
        //         editID : index
        //     }
        // )

        this.props.data.saveFn(obj.todoName , index)
        
        // setTimeout(() => {
        //     console.log("editt",this.props.data..editID)    
        // }, 100);
        
    }  

    render(){

        return (
            !(this.props.data.value.styleFlag) ?
            <FaEdit style={{ marginLeft: "10px", color: "green", fontSize: "20px", cursor: "pointer" }} onClick={()=>{this.editTdodo(this.props.data.value,this.props.data.index)}}/> : <FaBan style={{ marginLeft: "10px", color: "red", fontSize: "20px", cursor: "pointer" }} />
  
        )
    }

}
