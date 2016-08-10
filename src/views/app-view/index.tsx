
import * as React from 'react';
import * as styles from './index.css';
	
export class AppView extends React.Component<{}, {}> {
    render() {
        return (
            <section className={styles.rootContainer}>
                {this.props.children}
            </section>
        );
    }
}