import React from 'react';
import { observer } from 'mobx-react';

@observer
export class Counter extends React.Component {
    render() {
        return (
            <div>
                {this.props.counter.count}
                <button onClick={() => { () => this.props.increment(this.props.counter) }}></button>
                <button onClick={() => { () => this.props.decrement(this.props.counter) }}></button>
            </div>
        )
    }
}