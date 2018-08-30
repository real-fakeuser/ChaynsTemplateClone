import React from 'react';

import Formular from './addSiteFormular/addSiteFormular';
import SearchContainer from './siteSearchContainer/SearchContainer';

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