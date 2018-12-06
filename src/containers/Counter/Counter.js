import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/actions';



import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Counter extends Component {
    //    state = {
    //         counter: 0
    //     }

    //     counterChangedHandler = (action, value) => {
    //         switch (action) {
    //             case 'inc':
    //                 this.setState((prevState) => { return { counter: prevState.counter + 1 } })
    //                 break;
    //             case 'dec':
    //                 this.setState((prevState) => { return { counter: prevState.counter - 1 } })
    //                 break;
    //             case 'add':
    //                 this.setState((prevState) => { return { counter: prevState.counter + value } })
    //                 break;
    //             case 'sub ':
    //                 this.setState((prevState) => { return { counter: prevState.counter - value } })
    //                 break;
    //         }
    //     }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddFive} />
                <CounterControl label="Subtract 5" clicked={this.props.subtractFive} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>

                    ))}
                </ul>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddFive: () => dispatch(actionCreators.add_five(5)),
        subtractFive: () => dispatch(actionCreators.subtract_five(5)),
        onStoreResult: (result) => dispatch(actionCreators.store_results(result)),
        onDeleteResult: (id) => dispatch(actionCreators.delete_results(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);