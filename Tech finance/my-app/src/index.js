import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './App';
import registerServiceWorker from './registerServiceWorker';
import Language from './language';

ReactDOM.render(<Language/>, document.getElementById('root'));
registerServiceWorker();
