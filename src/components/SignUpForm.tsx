import { Button } from '@radix-ui/themes'
import { FieldValues, useForm } from 'react-hook-form'
import apiClient from '../service/api-clients'

const SignUpForm = () => {
	const {
		handleSubmit,
		register,
		formState: { isValid },
	} = useForm()
	// const form = useForm()


	const onSubmit = (data: FieldValues) => {
		console.log(data)
		apiClient
			.post('/users/signup/', data)
			.then(res => console.log(res.data))
			.catch(err => console.error(err.message))
	}

	return (
		<form onSubmit={handleSubmit(data => onSubmit(data))}>
			<div className='w-1/4 mb-3 flex flex-col'>
				<label htmlFor='username'>Username:</label>
				<input
					className='border rounded-md'
					type='text'
					{...register('username')}
					name='username'
					id='username'
				/>
			</div>
			<div className='w-1/4 mb-3 flex flex-col'>
				<label htmlFor='email'>Email:</label>
				<input
					className='border rounded-md'
					type='email'
					{...register('email')}
					name='email'
					id='email'
				/>
			</div>
			<div className='w-1/4 mb-3 flex flex-col'>
				<label htmlFor='password'>Password:</label>
				<input
					className='border rounded-md'
					type='password'
					{...register('password')}
					name='password'
					id='password'
				/>
			</div>
			<div className='w-1/4 mb-3 flex flex-col'>
				<label htmlFor='confirm-password'>Confirm password:</label>
				<input
					className='border rounded-md'
					type='password'
					{...register('confirm_password')}
					name='confirm_password'
					id='confirm-password'
				/>
			</div>

			<Button className='w-1/4' disabled={isValid}>
				Sign Up
			</Button>
		</form>
	)
}

export default SignUpForm
