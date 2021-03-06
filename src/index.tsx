import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/AuthProvider/UserProvider';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<App />
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
