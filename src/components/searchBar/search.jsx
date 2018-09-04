import React from 'react';
import { Input } from 'chayns-components';
import './search.scss';


export default class searchModule extends React.Component {
    constructor(props) {
        super(props);

        this.timerID = 0;

    }

    

    keyUpSearch(value) {

        clearTimeout(this.timerID);
        if (value.length > 0) {
            this.timerID = setTimeout(() => {
                this.props.callback(value);
            }, 500);
        }


    }
    render = () => {
        return (
            <div className="flex-container">
                <div className="Suche Suche--accordion searchbar">
                    <Input
                        placeholder="Suche"
                        className="input searchIn"
                        onChange={(val) => {
                            this.keyUpSearch(val);
                        }}
                    />
                    <i className="fa fa-search searchIcon" aria-hidden="true" id="faSearchIcon"></i>
                </div>
            </div>
        );
    }
    
}