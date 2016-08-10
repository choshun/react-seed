import { EventExt } from '../interfaces';
import store from '../store';

export function selectSnapshot(index: number) {
    store.dispatch({
        type: 'selectSnapshot',
    	index
    });
};