import * as React from 'react';
import { SnapshotProps } from '../interfaces';

export default React.createClass<SnapshotProps, {}>({
    render() {
        const props: SnapshotProps = this.props;

        return (
            <figure className="snap-shot" onClick={ () => { props.onClick(props.index) }}>
                <figcaption>
                    <p>{ props.index } { props.type } graph</p>
                    <p>selected: { props.selected.toString() }</p>
                </figcaption>
            </figure>
        );
    }
});