import React from "react";
import { Label, Input, Col, Form } from "reactstrap";

interface Iprop {
    setdata: Function,
    getdata: String | undefined
}

export default class InputForm extends React.Component<any>{



    handleText = (e: any) => {
        this.props.setdata(e.target.value);
    }


    render() {
        return (
            <>
                <Form>
                    <InputForm row>
                        <Label for="example" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={(e) => this.handleText(e)} value={String(this.props.getdata)} />
                        </Col>
                    </InputForm>
                </Form>
                    {/* <Label for="exampleEmail">Enter Your Task</Label>
                    <Input type="text" name="text" id="exampletext" placeholder="Enter Your Task"  /> */}
                </>
                )
    }

}
