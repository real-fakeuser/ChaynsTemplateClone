import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'chayns-components'
import { Button, ChooseButton } from 'chayns-components'
import { Accordion } from 'chayns-components'
import { TextArea } from 'chayns-components'
import './Formular.scss'

const propTypes={
};

const defaultProps={
};


export default class Formular extends React.Component {
    constructor() {
        super();
        
        this.state = {
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
                    <Input
                        placeholder="Name"
                        className="form"
                        onChange={(val) => {
                            this.setState({ formName: val })
                        }
                        }
                    />
                    <Input
                        placeholder="E-Mail"
                        className="form"
                        regExp={'^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'}
                        onChange={(val) => {
                            if (val != null){
                            this.setState({ formEmail: val })
                            } else {
                                this.setState({ formEmail: "" })
                            }
                        }
                        }
                    />
                    <Input
                        placeholder="Adresse"
                        className="form"
                        onChange={(val) => {
                            this.setState({ formAdr: val })
                        }
                        }
                    />
                    <TextArea
                        autogrow
                        placeholder="Kommentar"
                        className="form"
                        onChange={(val) => {
                            this.setState({ formCom: val })                        }
                        }
                    />
                    <div id="sndDiv">
                        <Button
                            disabled={this.state.formName === "" || this.state.formAdr === "" || this.state.formEmail === ""}
                            onClick={(e) => {
                                    this.sendIcom();
                            }
                            }
                        >
                            Daten Senden
                            </Button>
                    </div>
                </div>
            </Accordion>
        );
    }

    sendIcom() {
        if (chayns.env.user.isAuthenticated) {
            var messageToSend = ('Anfrage Seite indizieren: \nName: ' + this.state.formName + '\nAdresse: ' + this.state.formAdr + '\neMail Adresse:' + this.state.formEmail + '\nKommentar: ' + this.state.formCom);
            chayns.intercom.sendMessageToPage({
                text: messageToSend
            }).then((data) => {
                if (data.status == 200) {
                    this.setState({ isDisabled: true });
                    this.setState({ formAdr: '' });
                    this.setState({ formEmail: '' });
                    this.setState({ formName: '' });
                    this.setState({ formCom: '' });
                    chayns.dialog.alert(chayns.env.user.name + ', Deine Anfrage wurde gesendet. \nVielen Dank für die Nachfrage!');
                }
            });
        } else {
            chayns.setAccessTokenChange(true, () =>  {   
                this.sendIcom();        
              });
              chayns.login(['login=true']);            

        }
    }


}


Formular.propTypes = propTypes;
Formular.defaultProps = defaultProps;

