import React from 'react';
import './Content.scss';
import Formular from './SiteFormular/Formular';
import SearchContainer from './SearchContainer/SearchContainer';

    export default class content extends React.Component {
        render() {
          return (
            <div className="tapp__content content">
                <Formular/>
                <SearchContainer/>
            </div>
          );
        }
    }