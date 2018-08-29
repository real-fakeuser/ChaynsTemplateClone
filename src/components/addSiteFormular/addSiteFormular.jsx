import React from 'react';
import { Input } from 'chayns-components';
import { Button, ChooseButton } from 'chayns-components';


export default class Formular extends React.Component {
    render() {
      return (
    <div className="accordion">
        <div className="accordion__head">Füge Deine eigene Site hinzu </div>
        <div className="accordion__body">
            <div className="accordion__content">
                <div className="Formular">
                    <div><Input id="frmName" placeholder="Name" required style={{width: 100+'%'}} responsive/></div>
                    <div><Input id="frmAddress" placeholder="Post-Adresse" required style={{width: 100+'%'}} responsive/></div>
                    <div><Input id="frmMailAddr" placeholder="eMailadresse" required style={{width: 100+'%'}} responsive/></div>
                    <div><Input id="frmComment" placeholder="Kommentar" required style={{width: 100+'%'}} responsive/></div>
                    <div style={{textAlign: "center", paddingTop: 10+'px'}}><Button className='button'>Daten absenden</Button></div>
                </div>
            </div>
        </div>
    </div>
);
    }
  }
  


