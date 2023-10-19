import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';
import App from './components/App';
import './reset.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))}>
    <App />
  </Provider>
);
