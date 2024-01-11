import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface Iprops{
    
}



export default class Descriptions extends React.Component<Iprops,any>{

    constructor(props : Iprops)
    {
        super(props)
        this.state=
        {
            model : false
        }
    }

    setModel = ()=>{
        this.setState(
            {
                model : !this.state.model
            }
        )

        setTimeout(() => {
            console.log(this.state.model);    
        }, 100);
        
    }


    render(){
        
        return (
            <div>
      <Button color="danger" onClick={this.setModel} style={{border: "0",backgroundColor: "transparent",color: 'grey'}}>
        View
      </Button>
      <Modal isOpen={this.state.model} toggle={this.setModel}>
        <ModalHeader toggle={this.setModel}>Modal title</ModalHeader>
        <ModalBody>
        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.setModel}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={this.setModel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
        )
    }

}