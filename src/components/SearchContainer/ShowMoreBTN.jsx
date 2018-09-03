import React from 'react'
import  PropTypes  from 'prop-types'

const propTypes ={
    callback: PropTypes.func.isRequired
};

 class AddMoreButton extends React.Component {
    constructor(props) {
        super(props);

        this.addMoreItems = this.addMoreItems.bind(this);

        console.log('props', this.props);
    };
    addMoreItems() {
        this.props.callback();
    };
    render() {
        return (
            <div className='right' style={{textAlign: 'right',margin: 10+'px '+10+'px '+5+'px ' + 0}}>
                <a href='#'onClick={this.addMoreItems}>Mehr anzeigen</a>             
            </div>
        )
    };
};

AddMoreButton.propTypes = propTypes;

export default AddMoreButton;
