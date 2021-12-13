import '@sass/content/home/home.scss';

import Error404 from '@component/common/core/Error404';
import ScrollToTop from '@component/common/core/ScrollToTop';
import Home from '@component/Home';
import Footer from '@component/layout/Footer';
import Header from '@component/layout/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route>
					<Error404 />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
