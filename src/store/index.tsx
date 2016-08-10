import { combineReducers, createStore } from 'redux';
import { StoreStructure } from '../interfaces';

import snapshots from '../reducers/snapshots';

const reducers = combineReducers({
    snapshots
});

export default createStore(reducers);