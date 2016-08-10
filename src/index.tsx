import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import router from './routes';
import store from './store';

const Root = React.createClass<{}, {}>({
    render: function(){
        return (
            <Provider store={store}>
                { router }
            </Provider>
        );
    }
});

ReactDOM.render(
    <Root />,
    document.getElementById('root-container')
);