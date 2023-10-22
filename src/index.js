import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './reducers/rootReducer';
import App from './components/App';
import './reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
