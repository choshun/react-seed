import * as React from 'react';
import * as styles from './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSnapshot } from '../../actions/index.tsx';
import { SnapshotProps } from '../../interfaces';

import Snapshot from '../../common-components/Snapshot.tsx';

interface DashboardProps {
    snapshots: Array<SnapshotProps>
}

const mapStateToProps = (store: DashboardProps, ownProp?: {}) => {
	return {
		'snapshots': store.snapshots
	};
};

const Dashboard = React.createClass<DashboardProps, {}>({
    render() {
        return (
            <section className={styles.pageContainer}>
                <h2>Dashboard</h2>
                <ul>
		          	{ 
		          		this.props.snapshots.map((snapshot: SnapshotProps, index: number) => {
				        	return <li key={ index }>
								<Snapshot
									onClick={ selectSnapshot }
									index={ index }
									type={ snapshot.type }
									selected={ snapshot.selected }
								></Snapshot>
				            </li>
				        })
		          	}
		        </ul>
            </section>
        );
    }
});

export default connect(mapStateToProps)(Dashboard);