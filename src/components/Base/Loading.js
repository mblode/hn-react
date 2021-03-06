import React, { Component } from 'react';
import Wrap from './Wrap';
import { Spinner } from 'roni';

export default class Loading extends Component {
    render() {
        return (
            <Wrap align='center' minHeight flex>
                <Spinner stroke='#f68a30' />
            </Wrap>
        );
    }
}
