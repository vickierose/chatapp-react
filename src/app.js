import React from 'react';
import { render } from 'react-dom';

import style from './main.scss';

import { Main } from './components/main.jsx';

import configureStore from './store';
import initialStore from './store/initial-store';

const store = configureStore(initialStore);

render(<Main store={store}/>,
document.getElementById('root'));