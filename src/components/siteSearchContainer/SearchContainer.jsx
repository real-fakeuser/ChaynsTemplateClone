import React from 'react';
import { Accordion } from 'chayns-components';
import SearchModule from './searchModule';
import getJSONObject from '../../utils/getJson';
import ListItem from './listItem';

export default class SearchContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            formName: "",
            formAdr: "",
            formEmail: "",
            formCom: "",
            isDisabled: true,
            listItems: []
        }

    }

    loadData(key, skip, take) {
        chayns.showWaitCursor(" ");
        getJSONObject(key, skip, take).then((json) => {
            let items = [];
            for(let i=0; i < json.Data.length; i++){
                items.push({siteId: json.Data[i].siteId,locationId: json.Data[i].locationId,appstoreName: json.Data[i].appstoreName})
            }
            this.setState({ listItems: items });   
            chayns.hideWaitCursor();         
        });
    }

    render() {
        return (
            <Accordion defaultOpened head={"Ergebnisse"} className='accordion--fixed' right={<SearchModule callBack={(val) => { this.loadData(val, 0, 10) }} />}>
                <div className="accordion__content">
                    {
                        this.state.listItems && this.state.listItems.map(({ siteId, locationId, appstoreName }) => (
                            //console.log(siteId,locationId,appstoreName)                 
                            <ListItem
                                key={siteId}
                                siteId={siteId}
                                locationId={locationId}
                                appstoreName={appstoreName}                            
                            />
                        ))                        
                    }
                </div>
            </Accordion>
        );
    }

}



