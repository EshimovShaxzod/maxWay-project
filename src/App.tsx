import Footer from './components/footer'
import Header from './components/header'
import Auhenticate from './features/auth/Authanticate'

const App = () => {
	return (
		<>
			<Header />
			<Auhenticate />
			<Footer />
		</>
	)
}

export default App

// <></> -> React.Fragment -> Fragment