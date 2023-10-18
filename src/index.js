import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { rootReducer } from './reducers/rootReducer';
import App from './components/App';
import './reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>
);
