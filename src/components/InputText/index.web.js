import React, { Component } from 'react';
import {Input, InputGroup} from  'native-base';
import PropTypes from 'prop-types';
import {View, Platform } from 'react-native';

export default class InputText extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired
    }
    render(){
        console.log("childeren:"+this.props.children)
        return(
            <InputGroup>
                <Input placeholder={this.props.children}/>
            </InputGroup>
        )
    }
}

