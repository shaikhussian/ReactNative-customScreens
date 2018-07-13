import React, { Component } from 'react';
import {Item, Label, Input, Form} from  'native-base';
import PropTypes from 'prop-types';
import {View, Platform } from 'react-native';

export default class InputText extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired
    }
    render(){
        console.log("childeren:"+this.props.children)
        return(
            <Form>
                <Item {...this.props} floatingLabel>
                    <Label>{this.props.children}</Label>
                    <Input />
                </Item>
            </Form>
        )
    }
}

