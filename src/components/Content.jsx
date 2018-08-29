import React from 'react';

import addSiteFormular from './addSiteFormular/addSiteFormular';




    export default class content extends React.Component {
        render() {
          return (
            <div className="tapp__content content">
                <addSiteFormular/>
            </div>
          );
        }
    }