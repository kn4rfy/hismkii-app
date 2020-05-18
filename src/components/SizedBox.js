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
	return <StyledView {...props} />;
}

const StyledView = styled.View`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
`;
