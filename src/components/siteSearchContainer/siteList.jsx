import React from 'react';
import { Accordion } from 'chayns-components';



export default class Formular extends React.Component {
    constructor(){
        super();

        this.state={
            formName: "",
            formAdr: "",
            formEmail: "",
            formCom: "",
            isDisabled: true
        }
    }    

    render() {
        return (
            <Accordion defaultOpened class='accordion--fixed accordion--open' head={"Site hinzufügen"}>
                            <div className="accordion__content">
                            
                            </div>
            </Accordion>
        );
    }

}



