import React from 'react';

export default class addSiteFormular extends React.Component {
    render() {
      return (
                <div className="accordion">
                    <div className="accordion__head">Füge Deine eigene Site hinzu </div>
                    <div className="accordion__body">
                        <div className="accordion__content">
                            <div className="Formular">
                                <div className="Formularcontent">
                                    <input type="text" className="input forminput" id="frmName" placeholder="Name"/>
                                </div>
                                <div className="Formularcontent">
                                    <input type="text" className="input forminput" id="frmAddress" placeholder="Post-Adresse"/>
                                </div>
                                <div className="Formularcontent">
                                        <input type="text" className="input forminput" id="frmMailAddr" placeholder="eMailadresse"/>
                                </div>
                                <div className="Formularcontent">
                                        <input type="text" className="input forminput" id="frmComment" placeholder="Kommentar"/>
                                </div>
                                <div id="submitButton">
                                    <div style="text-align: center">
                                        <button className="button" id="sendForm">Daten absenden</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     );
    }
  }
  