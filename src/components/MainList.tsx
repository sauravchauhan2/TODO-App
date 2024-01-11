import React from "react";




export default class MainList extends React.Component<any>{
    

    render(){
        return(
            (this.props.value.styleFlag) ?
                            <input type="text" value={this.props.value.todoName} key={this.props.index} onClick={() => {
                                this.props.setStyle(false,this.props.index);
                            }} className="addstyle" readOnly/> :
                            <input type="text" value={this.props.value.todoName} key={this.props.index} onClick={() => {
                                this.props.setStyle(true,this.props.index);
                            }} readOnly/>
        )
    }
    
}
