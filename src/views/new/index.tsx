import * as React from 'react';
import * as styles from './index.css';

export class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.pageContainer}>
                <h1>Home page</h1>
            </div>
        );
    }
}