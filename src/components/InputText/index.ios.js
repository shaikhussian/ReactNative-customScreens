import React, { Component } from 'react';
import {Item, Label, Input, Form} from  'native-base';
import PropTypes from 'prop-types';

export default class InputText extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired,
        onChangeText:PropTypes.func.isRequired
    }

    render(){
        console.log("childeren:"+this.props.children)
        return(
            <Form>
                <Item floatingLabel>
                    <Label>{this.props.children}</Label>
                    <Input onChangeText={this.props.onChangeText}/>
                </Item>
            </Form>
        )
    }
}

