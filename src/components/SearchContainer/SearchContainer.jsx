import React from 'react';
import { Accordion } from 'chayns-components';
import SearchModule from '../searchBar/Search';
import getJSONObject from '../../utils/getJson';
import ListItem from '../ListItem/ListItem';
import './SearchContainer.scss';
import ShowMoreBTN from './ShowMoreBTN';
import { connect } from 'react-redux';
import { loadList } from '../action/siteList';

class SearchContainer extends React.Component {
    //TODO propTypes defaultProps
    constructor(props) {
        super(props);
        // this.props.changeName('name');
        this.searchString = 'test';
        this.listLength = 0;
        this.loadData('Tobit', 0, 10);
    }

    render() {
        return (
            <Accordion
                defaultOpened
                head={'Suchergebnisse'}
                className='accordion--fixed'
                right={<SearchModule
                    callback={(val) => {
                        this.loadData(val, 0, 10)
                    }}
                />
                }
            >
                <div className="accordion__content">
                    {
                        this.props.list && this.props.list.map(({ siteId, locationId, appstoreName }) => (
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
                    <ShowMoreBTN
                        callback={() => {
                            this.loadData(this.searchString, this.props.list.length, 10)
                        }}
                    />
                </div>
            </Accordion>
        );
    }

    loadData(word, skip, length) {
        chayns.showWaitCursor();
        this.searchString = word;
        //console.log(getJSONObject(word,skip, 10).then((json)=> console.log(json.Data)));
        getJSONObject(word, skip, length)
            .then((data) => {
                console.log(this.props.list.concat(data.Data));
                console.log(data.Data);
                if (data.Data.length > 0) {
                    if (skip != 0) {
                        this.props.loadNewList(this.props.list.concat(data.Data));
                    } else {
                        this.props.loadNewList(data.Data);
                    }
                }
            })
            .finally(() => chayns.hideWaitCursor());
    }
};

const mapStateToProps = (state) => ({
    // input: state.inputChange.input,
    list: state.sitelist
});

const mapDispatchToProps = (dispatch) => ({
    inputOnChange: (searchString) => dispatch(inputOnchangeAction(searchString)),
    loadNewList: items => dispatch(loadList(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

