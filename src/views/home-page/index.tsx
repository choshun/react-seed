import * as React from 'react';
import * as styles from './index.css';
import Dashboard from '../dashboard';

export class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <main className={styles.pageContainer}>
                <header>
                	<h1>Home page</h1>
                </header>

                <Dashboard />
            </main>
        );
    }
}