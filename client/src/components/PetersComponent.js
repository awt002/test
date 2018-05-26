/**
 * A basic custom component that renders a {color}-colored string {times} times 
 * @author chumothyLee
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * @param {*} props Props to be passed into component. Namely {times, color} 
 */
const PetersComponent = (props) => {
    console.log(props);
    const petersString = "Look Peter, the component works!".repeat(props.times);

    return (
        <p style={{color : props.color}}> {petersString} </p>
    ); 
}

PetersComponent.propTypes = {
    /** number of times to print string */
    times: PropTypes.number,
    /** color in which to print string */
    color: PropTypes.string
}

PetersComponent.defaultProps = {
    times: 1,
    color: '#000'
}

export default PetersComponent;