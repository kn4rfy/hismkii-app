import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Colors from '../constants/Colors';

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	iconLeft: PropTypes.element,
	iconRight: PropTypes.element,
};

Button.defaultProps = {
	type: 'primary',
};

export default function Button(props) {
	return (
		<ButtonContainer {...props}>
			{props.iconLeft && (
				<ButtonIconLeft className={'icon-left'}>
					{props.iconLeft}
				</ButtonIconLeft>
			)}
			<ButtonText className={'button-text'}>{props.text}</ButtonText>
			{props.iconRight && (
				<ButtonIconRight className={'icon-right'}>
					{props.iconRight}
				</ButtonIconRight>
			)}
		</ButtonContainer>
	);
}

const ButtonContainer = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 64px;
	background: ${props => Colors[props.type]};
	border-radius: 32px;
	box-shadow: 0px 4px 15px ${Colors.box_shadow_primary};
`;

const ButtonText = styled.Text`
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	color: ${Colors.white};
`;

const ButtonIconLeft = styled.View`
	align-items: center;
	margin-right: 10px;
	vertical-align: middle;
`;

const ButtonIconRight = styled.View`
	align-items: center;
	margin-left: 10px;
	vertical-align: middle;
`;
