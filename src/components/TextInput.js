import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Colors from '@/pages/mobile/constants/Colors';

export default class TextInputWrapper extends Component {
	static propTypes = {
		type: PropTypes.string,
		label: PropTypes.string,
		placeholder: PropTypes.string,
		value: PropTypes.node,
		onChange: PropTypes.func,
		error: PropTypes.node,
	};

	static defaultProps = {
		type: 'text',
		error: false,
	};

	render() {
		return <TextInput {...this.props} />;
	}
}

function TextInput(props) {
	return (
		<StyledInput {...props}>
			{props.label && <span className={'label'}>{props.label}</span>}
			{props.error && <span className={'label-error'}>*</span>}
			<input
				className={'input'}
				type={props.type}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
				autoComplete={'new-password'}
			/>
		</StyledInput>
	);
}

const StyledInput = styled.div`
	.label,
	.label-error {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 16px;
		color: ${props => (props.error ? Colors.danger : Colors.black)};
	}

	.input {
		width: 100%;
		height: 64px;
		padding: 16px 16px;
		border: 1px solid ${props => (props.error ? Colors.danger : Colors.primary)};
		border-radius: 16px;
		box-shadow: 0px 4px 15px
			${props =>
				props.error ? Colors.box_shadow_danger : Colors.box_shadow_primary};

		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 19px;
		color: ${Colors.black};

		::placeholder {
			color: rgba(0, 0, 0, 0.33);
		}

		:focus {
			outline: none;
		}
	}
`;
