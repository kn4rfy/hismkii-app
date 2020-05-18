import React from 'react';
import {Platform, View} from 'react-native';
import styled from 'styled-components';
import {createForm} from 'rc-form';
import base64 from 'base-64';
import Logo from '../../assets/svg/logo.svg';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import SizedBox from '../../components/SizedBox';
import {serverUrl} from '../../utils/hosts';
import axios from 'axios';

function Login(props) {
	const {getFieldDecorator, getFieldError} = props.form;

	function submit() {
		console.log('submit');
		props.form.validateFields(async (error, value) => {
			if (!error) {
				const token = await base64.encode(
					`${value.username}:${value.password}`,
				);
				console.log(token);
				axios
					.get(`${serverUrl}/api/users`, {
						headers: {
							Authorization: `Basic ${token}`,
						},
					})
					.then(response => {
						console.log(response);
						// TODO: replace with react navigation
						// router.goBack();
					})
					.catch(test => {
						console.log(test);
					});
			}
		});
	}

	return (
		<StyledKeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<HeadView>
				<Logo width={'100%'} height={'100%'} />
			</HeadView>

			<ContentView>
				<View>
					{getFieldDecorator('username', {
						initialValue: 'admin',
						rules: [{required: true, message: 'Please input your username!'}],
					})(
						<TextInput
							label={'Username'}
							placeholder={'Placeholder'}
							error={getFieldError('username')}
						/>,
					)}
					<SizedBox height={16} />
					{getFieldDecorator('password', {
						initialValue: 'password',
						rules: [{required: true, message: 'Please input your username!'}],
					})(
						<TextInput
							type={'password'}
							label={'Password'}
							placeholder={'Placeholder'}
							error={getFieldError('password')}
						/>,
					)}
					<SizedBox height={16} />
				</View>
				<Button type={'primary'} text={'LOGIN'} onPress={submit} />
			</ContentView>
		</StyledKeyboardAvoidingView>
	);
}

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
	margin: 0 16px 0 16px;
	flex: 1;
`;

const HeadView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const ContentView = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	padding: 32px 0 32px 0;
`;

export default createForm()(Login);
