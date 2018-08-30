import React from 'react'
import PropTypes from 'prop-types'
import './listItem.scss'

const propTypes={
            siteId: PropTypes.string.isRequired,
            locationId: PropTypes.number.isRequired,
            appstoreName: PropTypes.string.isRequired
};

const defaultProps={
};

export default class ListItem extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render = () => {
        const backImg = {
            backgroundImage: `url(https://sub60.tobit.com/l/${this.props.locationId})`,
            backgroundSize: `40px 40px`
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

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
