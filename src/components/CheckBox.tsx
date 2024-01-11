import React from "react";





export default class CheckBox extends React.Component<any>{



    saveCheck = (e: any, index: any) => {


        // (e.target.checked) ? this.props.playSound.play() : console.log("sound is off");
        console.log(this.props.display[index].todoName, " : ", index, e.target.checked);
        this.props.display[index].styleFlag = e.target.checked


        const checkLocal = localStorage.getItem('todo');
        if (checkLocal == null) {
            window.location.reload();
            alert("sorry... database is deleted for some reasons.😞");
           
        }
        else {
            localStorage.setItem('todo', JSON.stringify(this.props.display));
        }
        this.props.setDis(this.props.display);
    }

    render() {
        return (

            (this.props.value.styleFlag) ? <input type="checkbox" style={{ fontSize: "50px",marginRight : "5px" }} onClick={(e) => {
                this.saveCheck(e, this.props.index)
            }} checked={this.props.value.styleFlag} /> : <input type="checkbox" style={{ fontSize: "50px",marginRight: "5px"}} onClick={(e) => {
                this.saveCheck(e, this.props.index)
            }} checked={this.props.value.styleFlag} />

        )
    }


}
