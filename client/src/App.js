import React from 'react';
import { createBrowserHistory } from 'history';

import Routes from './Routes';

const customHistory = createBrowserHistory();

const App = () => <Routes history={customHistory} />;

export default App;
