import React from 'react';

import Formular from './addSiteFormular/addSiteFormular';
import SiteList from './siteSearchContainer/siteList';



    export default class content extends React.Component {
        render() {
          return (
            <div className="tapp__content content">
                <Formular/>
                <SiteList/>
            </div>
          );
        }
    }