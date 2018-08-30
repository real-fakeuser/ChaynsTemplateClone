import React from 'react';
import { Input } from 'chayns-components';
import './search.scss';
export default class searchModule extends React.Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {
            formCom: "",
            searchString: "",
            lastInputTime: 0,
            searchString: ""
        }
        this.timerID = 0;
    }

    render = () => {
        return (
            <div className="flex-container">
                <div className="Suche Suche--accordion searchbar">
                    <Input
                        placeholder="Suche"
                        className="input searchIn"
                        value={this.state.searchString}
                        onChange={(val) => { this.setState({ searchString: val }, () => { this.keyUpSearch() }) }}
                    />
                    <i className="fa fa-search searchIcon" aria-hidden="true" id="faSearchIcon"></i>
                </div>
            </div>
        );
    }

    keyUpSearch = () => {
        clearTimeout(this.timerID);
        if (this.state.searchString.length > 2) {
            this.timerID = setTimeout(() => {
                this.props.callBack(this.state.searchString);
            }, 500);
        }

    }
}