import { unescape } from "querystring";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import { isReserved, getValidVarName } from 'reserved-tokens';

export default class Button extends React.Component<any>{

    addme = () => {
        console.log("check: ", isReserved(this.props.data.todoName.trim()));
        if (Object.is(this.props.data.todoName.trim(), "") || Object.is(this.props.data.todoName, undefined) || isReserved(this.props.data.todoName.trim())) {
            if (isReserved(this.props.data.todoName.trim())) {
                alert(` '${this.props.data.todoName.trim()}' is javascript reserved keywords.🤨`)
            }
            else {
                alert("empty!..");
            }
        }
        else {
            const takeTodo = String(this.props.data.todoName);
            let data = []
            if (this.props.data.display.length == 0) {

                console.log("hellooo empty.....");
                this.props.data.arr?.push(
                    {
                        'todoName': takeTodo,
                        'styleFlag': ""
                    }
                );

                this.props.data.setdata("");

                this.props.data.saveArr(this.props.data.arr);

                console.log("arr : ", this.props.data.arr);

                localStorage.setItem('todo', JSON.stringify(this.props.data.arr));

            }
            else {
                console.log("hellooo already.....");
                data = this.props.data.display.map((value: any, index: any) => {
                    if (Object.is(value.todoName, (takeTodo.trim()))) {
                        return false;
                    }
                    else {
                        return {
                            'todoName': value.todoName, 'styleFlag': value.styleFlag
                        }
                    }
                })

                if (data.includes(false)) {
                    alert(`sorry "${takeTodo.trim()}" is already present.😀`)
                    this.setState(
                        {
                            todoName: ""
                        }
                    )
                }
                else {
                    //perform Edit task....
                    if (this.props.data.editID >= 0) {
                        console.log("testtt", data[this.props.data.editID]);
                        if (data[this.props.data.editID].styleFlag) {
                            alert(`sorry the task : ${data[this.props.data.editID].todoName} is already completed`)
                        }
                        else {
                            data[this.props.data.editID].todoName = takeTodo
                            data[this.props.data.editID].styleFlag = false
                        }
                        this.props.data.editId(undefined);
                    }
                    else {
                        data.push({
                            'todoName': takeTodo,
                            'styleFlag': ""
                        })
                    }

                    this.props.data.setdata("");

                    console.log("data is :", data);

                    const checkState = this.props.data.saveArr(data);
                    const CheckPro = new Promise((resolve, reject) => {

                        if (checkState) {
                            resolve(checkState);
                        }


                    })



                    const checkLocal = localStorage.getItem('todo');

                    if (checkLocal == null) {
                        window.location.reload();
                        alert("sorry... database is deleted for some reasons.😞");

                    }
                    else {
                        CheckPro.then((msg : any) => {
                            if(msg)
                            {
                                localStorage.setItem('todo', JSON.stringify(this.props.data.arr));
                            }
                        });

                    }


                }

            }

            setTimeout(() => {
                this.props.data.getItem();
            }, 200);


        }

    }

    render() {
        return (
            <>
                <button style={
                    { marginLeft: "10px", backgroundColor: "transparent", color: "orange", padding: "10px", border: "2px solid orange", cursor: 'pointer', borderRadius: "100%", fontWeight: "600" }}
                    onClick={this.addme}

                >ADD<IoMdAdd /></button><br /><br />
            </>
        )
    }

}
