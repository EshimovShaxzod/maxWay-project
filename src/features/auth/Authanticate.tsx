import { useState } from 'react'
import Profile from '../../components/Profile'
import SignUpForm from '../../components/SignUpForm'

const Auhenticate = () => {
	const [isLoggedIn, setLoggedIn] = useState(false)

	if (isLoggedIn) {
		return <Profile />
	}

	return <SignUpForm />
}

export default Auhenticate