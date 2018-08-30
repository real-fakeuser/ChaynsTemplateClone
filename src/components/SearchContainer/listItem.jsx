import React from 'react';
import './listItem.scss';

export default class ListItem extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render = () => {
        const backImg = {
            backgroundImage: `url(https://sub60.tobit.com/l/${this.props.locationId})`
        }
        return (
            <div className="ListItem ListItem--clickable listLinks" >
                <a href={`https://chayns.net/${this.props.siteId}`} target="_blank">
                    <div className="ListItem__head">
                        <div style={backImg} className="ListItem__Image">
                            <img />
                        </div>
                        <div className="ListItem__Title">
                            <p className="ListItem__Title--headline">{this.props.appstoreName}</p>
                            <p className="ListItem__Title--description">{this.props.siteId}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}