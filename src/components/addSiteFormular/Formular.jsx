import React from 'react';
import { Input } from 'chayns-components';
import { Button, ChooseButton } from 'chayns-components';
import { Accordion } from 'chayns-components';
import { TextArea } from 'chayns-components';

import './formular.scss'


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
            <Accordion head={"Site hinzufügen"}>
                <div className="accordion__content">
                    <Input placeholder="Name" className="form" value={this.state.formName} onChange={(val) => { this.setState({formName: val}); this._checkFormulaInput();}} />
                    <Input placeholder="E-Mail" className="form" value={this.state.formEmail}  onChange={(val) => { this.setState({formEmail: val}); this._checkFormulaInput();}}/>
                    <Input placeholder="Adresse" className="form" value={this.state.formAdr}  onChange={(val) => { this.setState({formAdr: val}); this._checkFormulaInput();}}/>
                    <TextArea autogrow placeholder="Kommentar" className="form"  value={this.state.formCom} onChange={(val) => { this.setState({formCom: val}); this._checkFormulaInput();}}/>
                    <div id="sndDiv">
                        <Button disabled={this.state.isDisabled} onClick={(e) => { this.sendIcom() }} >Senden</Button>
                    </div>
                </div>
            </Accordion>
        );
    }

    eMailValid = (email) => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
    }

    sendIcom(){
        var messageToSend = ('Anfrage Seite indizieren: \nName: ' + this.state.formName + '\nAdresse: ' + this.state.formAdr + '\neMail Adresse:' + this.state.formEmail + '\nKommentar: ' + this.state.formCom);
        chayns.intercom.sendMessageToPage({
            text: messageToSend
        }).then((data) => {            
            if(data.status == 200){
                this.setState({isDisabled: true});
                this.setState({formAdr: ''});
                this.setState({formEmail: ''});
                this.setState({formName: ''});
                this.setState({formCom: ''});
                chayns.dialog.alert(chayns.env.user.name + ', Deine Anfrage wurde gesendet. \nVielen Dank für die Nachfrage!');
            }
        });
    }

    _checkFormulaInput(){
        if(this.state.formName.length > 0 && this.state.formAdr.length > 0 && this.state.formEmail.length > 0 && this.eMailValid(this.state.formEmail)){
                this.setState({isDisabled: false});
        }
    }
}



