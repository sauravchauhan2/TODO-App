import React from "react";
import './stye.css';
import Title from './components/Title';
import CheckBox from './components/CheckBox'
import MainList from './components/MainList'
import BtnOption from './components/BtnOption'
import Input from "./components/Input";
import Button from "./components/Button";
import ToggleOption from "./components/ToggleOption"
import Descriptions from "./components/Descriptions"

interface Iprop {

}


class Main extends React.Component<Iprop, any>{

    constructor(props: Iprop) {
        super(props)
        this.state =
        {
            description: undefined,
            editID: undefined,
            todoName: "",
            arr: [],
            display: [],
            rLoad: false,
            color: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
            cntcheck: false,
            errorFlag: "hidden",
            audio: new Audio('complete.mp3')
        };

    }


    //set styleflag 

    setStyle = (flag: any, index: any) => {

        this.state.display[index].styleFlag = flag;
        console.log(flag, index);
        this.setState(
            {
                display: this.state.display
            }
        )

        setTimeout(() => {
            console.log("check: ", this.state.display);
        }, 100);

        const checkLocal = localStorage.getItem('todo');
        if (checkLocal == null) {
            window.location.reload();
            alert("sorry... database is deleted for some reasons.😞");

        }
        else {
            localStorage.setItem('todo', JSON.stringify(this.state.display));
        }
    }

    componentDidMount = () => {
        this.getItem();
    }

    //set the count 
    setCnt = (cnt: any) => {
        this.setState(
            {
                cntcheck: cnt
            }
        )
        setTimeout(() => {
            console.log('in main file ', this.state.cntcheck)
        }, 100);
    }

    //for the edit/ban button'

    savesomething = (todoName: any, editID: any) => {

        this.setState(
            {
                todoName: todoName,
                editID: editID
            }
        )

        console.log("savesomething : 0", editID);
    }


    //for saving the displays
    saveDisplay = (display: any) => {
        this.setState(
            {
                display: display
            }
        )
        setTimeout(() => {
            console.log(display);
        }, 100);
    }

    //for saving the todo data
    setdata = (todoName: any) => {
        this.setState(
            {
                todoName: todoName
            }
        )
    }

    //for saving the array 

    saveArr = (arr: any) => {

        this.setState(
            {
                arr: arr
            }
        )

        return true
    }

    saveEditID = (editID: any) => {
        this.setState(
            {
                editID: editID
            }
        )
    }


    showItem = () => {


        if (this.state.rload) {
            return (
                <h3>NO DATA.......</h3>
            )
        }
        else {
            console.log()
            let cnt = 0;
            const data = this.state.display.map((value: any, index: any) => {

                if (this.state.cntcheck) {
                    if (cnt >= this.state.color.length) {
                        cnt = 1;
                    }
                    else {
                        cnt++;
                    }
                }
                console.log("thundeerrr", cnt);
                return (

                    <div style={{ boxSizing: "border-box",display: "flex",alignItems:"center",paddingLeft: "38%"}} className={this.state.color[cnt - 1]}>
                        {
                            <CheckBox value={value} display={this.state.display} index={index} setDis={this.saveDisplay} playSound={this.state.audio} />
                        }
                        {
                            <MainList value={value} index={index} setStyle={this.setStyle} />
                        }


                        {

                            <BtnOption data={
                                {
                                    value: value,
                                    index: index,
                                    saveFn: this.savesomething
                                }
                            } />


                        }

                        {
                            <Descriptions />
                        }
                        <br></br>
                        <br></br>
                    </div>
                )

            }

            )

            return data;
        }

    }


    getItem = () => {
        const list: string = localStorage.getItem('todo') || "";
        console.log("DH", list.length)
        if (list.length == 0) {
            console.log("hii")
            this.setState({
                rload: true
            })
        }
        else {
            this.setState({
                rload: false
            })
            this.setState({
                display: JSON.parse(list)
            })
        }
        console.log(this.state.rload);
    }






    render() {

        return (
            <>

                <div style={{ textAlign: 'center', marginTop: "20px" }}>


                    {/* this is the title */}
                    <Title />
                    
                    {/* <input type="text" style={{ width: "23%", height: "22px", marginLeft: "50px" }} onChange={(e) => this.handleText(e)} value={this.state.todoName} /> */}
                    <Input setdata={this.setdata} getdata={this.state.todoName} />

                   
                    <Button data={
                        {
                            todoName: this.state.todoName,
                            display: this.state.display,
                            arr: this.state.arr,
                            editID: this.state.editID,
                            getItem: this.getItem,
                            saveArr: this.saveArr,
                            editId: this.saveEditID,
                            setdata: this.setdata
                        }
                    } />



                    <ToggleOption cnt={this.state.cntcheck} setCnt={this.setCnt} showItem={this.showItem} />


                    <this.showItem />

                </div>
            </>
        );
    }
}

export default Main;
