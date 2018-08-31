import React from 'react';
import { Accordion } from 'chayns-components';
import SearchModule from '../searchBar/Search';
import getJSONObject from '../../utils/getJson';
import ListItem from '../ListItem/ListItem';
import './SearchContainer.scss';

export default class SearchContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            listItems: [],
            shouldClearList: true

        }
        this.searchString = '';
        this.listLength = 0;
        this.loadData('Tobit', 0, 10);
    }

    loadData(key, skip, take) {
        chayns.showWaitCursor();
        this.searchString = key;
        this.listLength = skip;
        getJSONObject(key, skip, take).then((json) => {
            if (json.Data != null) {
                let items = [];
                if (!this.state.shouldClearList) {
                    items = this.state.listItems;
                    this.setState({ shouldClearList: true });
                }

                for (let i = 0; i < json.Data.length; i++) {
                    items.push({ siteId: json.Data[i].siteId, locationId: json.Data[i].locationId, appstoreName: json.Data[i].appstoreName })
                }
                this.setState({ listItems: items });
            } else if (skip > 0) {
                this.setState({ listLength: (this.listLength - skip) });
                chayns.dialog.alert('Information', 'Es sind keine weiteren Ergebnisse verfügbar')
                    .then(function (data) { });
            } else {
                this.loadData('Tobit', 0, 10);

            }
            chayns.hideWaitCursor();
        });
    }

    render() {
        return (
            <Accordion
                defaultOpened
                head={'Suchergebnisse'}
                className='accordion--fixed'
                right={<SearchModule
                    callBack={(val) => {
                        this.loadData(val, 0, 10)
                    }}
                />
                }
            >
                <div className="accordion__content">
                    {
                        this.state.listItems && this.state.listItems.map(({ siteId, locationId, appstoreName }) => (
                            <ListItem
                                key={siteId}
                                siteId={siteId}
                                locationId={locationId}
                                appstoreName={appstoreName}
                            />
                        ))
                    }
                </div>
                <div id="right">
                    <a
                        id="showMoreBtn"
                        href="#"
                        onClick={() => {
                            this.setState({ shouldClearList: false }, () => {
                                this.loadData(this.searchString, this.listLength += 10, 10)
                            })
                        }}
                    >
                        Mehr anzeigen
                            </a>
                </div>
            </Accordion>
        );
    }

}



