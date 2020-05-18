import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

SizedBox.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

SizedBox.defaultProps = {
	width: 0,
	height: 0,
};

export default function SizedBox(props) {
	return <StyledButton {...props} />;
}

const StyledButton = styled.div`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
`;
